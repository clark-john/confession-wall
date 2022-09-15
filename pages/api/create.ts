import type { NextApiRequest, NextApiResponse } from 'next';
import { ConfessionData } from 'utils/interfaces';
import { autoIncrement } from 'utils/autoIncrement';
import prisma from 'lib/prisma';
import chroma from 'chroma-js';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  try {
    const {
      title,
      content,
      withWebsite,
      websiteName,
      websiteLink
    }: ConfessionData = req.body;
    await prisma.confession.create({
      data: {
        id: await autoIncrement(prisma),
        title,
        content,
        color: chroma.random().hex(),
        withWebsite,
        websiteName,
        websiteLink   
      }
    });
    res.status(200).send("OK");
  } catch(e) {
    throw e;
    // res.status(400).send("Error")
  }
}
