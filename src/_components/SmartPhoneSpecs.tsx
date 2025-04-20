import React from 'react';
import { Specs } from '../domain/projec';
import styles from '../CSS.modules/SmartPhoneSpecs.module.css';

interface SmartPhoneSpecsProps {
  specs: Specs;
  brand: string;
  name: string;
  description: string;
}

export const SmartPhoneSpecs = ({
  specs,
  brand,
  name,
  description,
}: SmartPhoneSpecsProps) => {
  const {
    battery,
    mainCamera,
    os,
    processor,
    resolution,
    screenRefreshRate,
    selfieCamera,
    screen,
  } = specs;
  return (
    <div className={styles.specs}>
      <h1 style={{ textAlign: 'left', width: '100%' }}>SPECIFICATIONS</h1>
      <table>
        <tbody>
          <tr>
            <td className={styles.upperLetter}>brand</td>
            <td className={styles.padding16}>{brand}</td>
          </tr>
          <tr>
            <td className={styles.upperLetter}>name</td>
            <td className={styles.padding16}>{name}</td>
          </tr>
          <tr>
            <td className={styles.upperLetter}>description</td>
            <td className={styles.padding16}>{description}</td>
          </tr>
          <tr>
            <td className={styles.upperLetter}>screen</td>
            <td className={styles.padding16}>{screen}</td>
          </tr>
          <tr>
            <td className={styles.upperLetter}>resolution</td>
            <td className={styles.padding16}>{resolution}</td>
          </tr>
          <tr>
            <td className={styles.upperLetter}>processor</td>
            <td className={styles.padding16}>{processor}</td>
          </tr>
          <tr>
            <td className={styles.upperLetter}>main camera</td>
            <td className={styles.padding16}>{mainCamera}</td>
          </tr>
          <tr>
            <td className={styles.upperLetter}>selfie camera</td>
            <td className={styles.padding16}>{selfieCamera}</td>
          </tr>
          <tr>
            <td className={styles.upperLetter}>battery</td>
            <td className={styles.padding16}>{battery}</td>
          </tr>
          <tr>
            <td className={styles.upperLetter}>os</td>
            <td className={styles.padding16}>{os}</td>
          </tr>
          <tr>
            <td className={styles.upperLetter}>screen refresh rate</td>
            <td className={styles.padding16}>{screenRefreshRate}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
