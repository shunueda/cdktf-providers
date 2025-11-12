// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/data-sources/dos_protection_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataScmDosProtectionProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The UUID of the DNS security profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/data-sources/dos_protection_profile#id DataScmDosProtectionProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/data-sources/dos_protection_profile#name DataScmDosProtectionProfile#name}
  */
  readonly name?: string;
}
export interface DataScmDosProtectionProfileFloodIcmpRedBlock {
}

export function dataScmDosProtectionProfileFloodIcmpRedBlockToTerraform(struct?: DataScmDosProtectionProfileFloodIcmpRedBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmDosProtectionProfileFloodIcmpRedBlockToHclTerraform(struct?: DataScmDosProtectionProfileFloodIcmpRedBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmDosProtectionProfileFloodIcmpRedBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmDosProtectionProfileFloodIcmpRedBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmDosProtectionProfileFloodIcmpRedBlock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getNumberAttribute('duration');
  }
}
export interface DataScmDosProtectionProfileFloodIcmpRed {
}

export function dataScmDosProtectionProfileFloodIcmpRedToTerraform(struct?: DataScmDosProtectionProfileFloodIcmpRed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmDosProtectionProfileFloodIcmpRedToHclTerraform(struct?: DataScmDosProtectionProfileFloodIcmpRed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmDosProtectionProfileFloodIcmpRedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmDosProtectionProfileFloodIcmpRed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmDosProtectionProfileFloodIcmpRed | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // activate_rate - computed: true, optional: false, required: false
  public get activateRate() {
    return this.getNumberAttribute('activate_rate');
  }

  // alarm_rate - computed: true, optional: false, required: false
  public get alarmRate() {
    return this.getNumberAttribute('alarm_rate');
  }

  // block - computed: true, optional: false, required: false
  private _block = new DataScmDosProtectionProfileFloodIcmpRedBlockOutputReference(this, "block");
  public get block() {
    return this._block;
  }

  // maximal_rate - computed: true, optional: false, required: false
  public get maximalRate() {
    return this.getNumberAttribute('maximal_rate');
  }
}
export interface DataScmDosProtectionProfileFloodIcmp {
}

export function dataScmDosProtectionProfileFloodIcmpToTerraform(struct?: DataScmDosProtectionProfileFloodIcmp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmDosProtectionProfileFloodIcmpToHclTerraform(struct?: DataScmDosProtectionProfileFloodIcmp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmDosProtectionProfileFloodIcmpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmDosProtectionProfileFloodIcmp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmDosProtectionProfileFloodIcmp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // red - computed: true, optional: false, required: false
  private _red = new DataScmDosProtectionProfileFloodIcmpRedOutputReference(this, "red");
  public get red() {
    return this._red;
  }
}
export interface DataScmDosProtectionProfileFloodIcmpv6RedBlock {
}

export function dataScmDosProtectionProfileFloodIcmpv6RedBlockToTerraform(struct?: DataScmDosProtectionProfileFloodIcmpv6RedBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmDosProtectionProfileFloodIcmpv6RedBlockToHclTerraform(struct?: DataScmDosProtectionProfileFloodIcmpv6RedBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmDosProtectionProfileFloodIcmpv6RedBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmDosProtectionProfileFloodIcmpv6RedBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmDosProtectionProfileFloodIcmpv6RedBlock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getNumberAttribute('duration');
  }
}
export interface DataScmDosProtectionProfileFloodIcmpv6Red {
}

export function dataScmDosProtectionProfileFloodIcmpv6RedToTerraform(struct?: DataScmDosProtectionProfileFloodIcmpv6Red): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmDosProtectionProfileFloodIcmpv6RedToHclTerraform(struct?: DataScmDosProtectionProfileFloodIcmpv6Red): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmDosProtectionProfileFloodIcmpv6RedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmDosProtectionProfileFloodIcmpv6Red | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmDosProtectionProfileFloodIcmpv6Red | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // activate_rate - computed: true, optional: false, required: false
  public get activateRate() {
    return this.getNumberAttribute('activate_rate');
  }

  // alarm_rate - computed: true, optional: false, required: false
  public get alarmRate() {
    return this.getNumberAttribute('alarm_rate');
  }

  // block - computed: true, optional: false, required: false
  private _block = new DataScmDosProtectionProfileFloodIcmpv6RedBlockOutputReference(this, "block");
  public get block() {
    return this._block;
  }

  // maximal_rate - computed: true, optional: false, required: false
  public get maximalRate() {
    return this.getNumberAttribute('maximal_rate');
  }
}
export interface DataScmDosProtectionProfileFloodIcmpv6 {
}

export function dataScmDosProtectionProfileFloodIcmpv6ToTerraform(struct?: DataScmDosProtectionProfileFloodIcmpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmDosProtectionProfileFloodIcmpv6ToHclTerraform(struct?: DataScmDosProtectionProfileFloodIcmpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmDosProtectionProfileFloodIcmpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmDosProtectionProfileFloodIcmpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmDosProtectionProfileFloodIcmpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // red - computed: true, optional: false, required: false
  private _red = new DataScmDosProtectionProfileFloodIcmpv6RedOutputReference(this, "red");
  public get red() {
    return this._red;
  }
}
export interface DataScmDosProtectionProfileFloodOtherIpRedBlock {
}

export function dataScmDosProtectionProfileFloodOtherIpRedBlockToTerraform(struct?: DataScmDosProtectionProfileFloodOtherIpRedBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmDosProtectionProfileFloodOtherIpRedBlockToHclTerraform(struct?: DataScmDosProtectionProfileFloodOtherIpRedBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmDosProtectionProfileFloodOtherIpRedBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmDosProtectionProfileFloodOtherIpRedBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmDosProtectionProfileFloodOtherIpRedBlock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getNumberAttribute('duration');
  }
}
export interface DataScmDosProtectionProfileFloodOtherIpRed {
}

export function dataScmDosProtectionProfileFloodOtherIpRedToTerraform(struct?: DataScmDosProtectionProfileFloodOtherIpRed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmDosProtectionProfileFloodOtherIpRedToHclTerraform(struct?: DataScmDosProtectionProfileFloodOtherIpRed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmDosProtectionProfileFloodOtherIpRedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmDosProtectionProfileFloodOtherIpRed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmDosProtectionProfileFloodOtherIpRed | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // activate_rate - computed: true, optional: false, required: false
  public get activateRate() {
    return this.getNumberAttribute('activate_rate');
  }

  // alarm_rate - computed: true, optional: false, required: false
  public get alarmRate() {
    return this.getNumberAttribute('alarm_rate');
  }

  // block - computed: true, optional: false, required: false
  private _block = new DataScmDosProtectionProfileFloodOtherIpRedBlockOutputReference(this, "block");
  public get block() {
    return this._block;
  }

  // maximal_rate - computed: true, optional: false, required: false
  public get maximalRate() {
    return this.getNumberAttribute('maximal_rate');
  }
}
export interface DataScmDosProtectionProfileFloodOtherIp {
}

export function dataScmDosProtectionProfileFloodOtherIpToTerraform(struct?: DataScmDosProtectionProfileFloodOtherIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmDosProtectionProfileFloodOtherIpToHclTerraform(struct?: DataScmDosProtectionProfileFloodOtherIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmDosProtectionProfileFloodOtherIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmDosProtectionProfileFloodOtherIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmDosProtectionProfileFloodOtherIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // red - computed: true, optional: false, required: false
  private _red = new DataScmDosProtectionProfileFloodOtherIpRedOutputReference(this, "red");
  public get red() {
    return this._red;
  }
}
export interface DataScmDosProtectionProfileFloodTcpSynRedBlock {
}

export function dataScmDosProtectionProfileFloodTcpSynRedBlockToTerraform(struct?: DataScmDosProtectionProfileFloodTcpSynRedBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmDosProtectionProfileFloodTcpSynRedBlockToHclTerraform(struct?: DataScmDosProtectionProfileFloodTcpSynRedBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmDosProtectionProfileFloodTcpSynRedBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmDosProtectionProfileFloodTcpSynRedBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmDosProtectionProfileFloodTcpSynRedBlock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getNumberAttribute('duration');
  }
}
export interface DataScmDosProtectionProfileFloodTcpSynRed {
}

export function dataScmDosProtectionProfileFloodTcpSynRedToTerraform(struct?: DataScmDosProtectionProfileFloodTcpSynRed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmDosProtectionProfileFloodTcpSynRedToHclTerraform(struct?: DataScmDosProtectionProfileFloodTcpSynRed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmDosProtectionProfileFloodTcpSynRedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmDosProtectionProfileFloodTcpSynRed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmDosProtectionProfileFloodTcpSynRed | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // activate_rate - computed: true, optional: false, required: false
  public get activateRate() {
    return this.getNumberAttribute('activate_rate');
  }

  // alarm_rate - computed: true, optional: false, required: false
  public get alarmRate() {
    return this.getNumberAttribute('alarm_rate');
  }

  // block - computed: true, optional: false, required: false
  private _block = new DataScmDosProtectionProfileFloodTcpSynRedBlockOutputReference(this, "block");
  public get block() {
    return this._block;
  }

  // maximal_rate - computed: true, optional: false, required: false
  public get maximalRate() {
    return this.getNumberAttribute('maximal_rate');
  }
}
export interface DataScmDosProtectionProfileFloodTcpSynSynCookiesBlock {
}

export function dataScmDosProtectionProfileFloodTcpSynSynCookiesBlockToTerraform(struct?: DataScmDosProtectionProfileFloodTcpSynSynCookiesBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmDosProtectionProfileFloodTcpSynSynCookiesBlockToHclTerraform(struct?: DataScmDosProtectionProfileFloodTcpSynSynCookiesBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmDosProtectionProfileFloodTcpSynSynCookiesBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmDosProtectionProfileFloodTcpSynSynCookiesBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmDosProtectionProfileFloodTcpSynSynCookiesBlock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getNumberAttribute('duration');
  }
}
export interface DataScmDosProtectionProfileFloodTcpSynSynCookies {
}

export function dataScmDosProtectionProfileFloodTcpSynSynCookiesToTerraform(struct?: DataScmDosProtectionProfileFloodTcpSynSynCookies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmDosProtectionProfileFloodTcpSynSynCookiesToHclTerraform(struct?: DataScmDosProtectionProfileFloodTcpSynSynCookies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmDosProtectionProfileFloodTcpSynSynCookiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmDosProtectionProfileFloodTcpSynSynCookies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmDosProtectionProfileFloodTcpSynSynCookies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // activate_rate - computed: true, optional: false, required: false
  public get activateRate() {
    return this.getNumberAttribute('activate_rate');
  }

  // alarm_rate - computed: true, optional: false, required: false
  public get alarmRate() {
    return this.getNumberAttribute('alarm_rate');
  }

  // block - computed: true, optional: false, required: false
  private _block = new DataScmDosProtectionProfileFloodTcpSynSynCookiesBlockOutputReference(this, "block");
  public get block() {
    return this._block;
  }

  // maximal_rate - computed: true, optional: false, required: false
  public get maximalRate() {
    return this.getNumberAttribute('maximal_rate');
  }
}
export interface DataScmDosProtectionProfileFloodTcpSyn {
}

export function dataScmDosProtectionProfileFloodTcpSynToTerraform(struct?: DataScmDosProtectionProfileFloodTcpSyn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmDosProtectionProfileFloodTcpSynToHclTerraform(struct?: DataScmDosProtectionProfileFloodTcpSyn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmDosProtectionProfileFloodTcpSynOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmDosProtectionProfileFloodTcpSyn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmDosProtectionProfileFloodTcpSyn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // red - computed: true, optional: false, required: false
  private _red = new DataScmDosProtectionProfileFloodTcpSynRedOutputReference(this, "red");
  public get red() {
    return this._red;
  }

  // syn_cookies - computed: true, optional: false, required: false
  private _synCookies = new DataScmDosProtectionProfileFloodTcpSynSynCookiesOutputReference(this, "syn_cookies");
  public get synCookies() {
    return this._synCookies;
  }
}
export interface DataScmDosProtectionProfileFloodUdpRedBlock {
}

export function dataScmDosProtectionProfileFloodUdpRedBlockToTerraform(struct?: DataScmDosProtectionProfileFloodUdpRedBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmDosProtectionProfileFloodUdpRedBlockToHclTerraform(struct?: DataScmDosProtectionProfileFloodUdpRedBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmDosProtectionProfileFloodUdpRedBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmDosProtectionProfileFloodUdpRedBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmDosProtectionProfileFloodUdpRedBlock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getNumberAttribute('duration');
  }
}
export interface DataScmDosProtectionProfileFloodUdpRed {
}

export function dataScmDosProtectionProfileFloodUdpRedToTerraform(struct?: DataScmDosProtectionProfileFloodUdpRed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmDosProtectionProfileFloodUdpRedToHclTerraform(struct?: DataScmDosProtectionProfileFloodUdpRed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmDosProtectionProfileFloodUdpRedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmDosProtectionProfileFloodUdpRed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmDosProtectionProfileFloodUdpRed | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // activate_rate - computed: true, optional: false, required: false
  public get activateRate() {
    return this.getNumberAttribute('activate_rate');
  }

  // alarm_rate - computed: true, optional: false, required: false
  public get alarmRate() {
    return this.getNumberAttribute('alarm_rate');
  }

  // block - computed: true, optional: false, required: false
  private _block = new DataScmDosProtectionProfileFloodUdpRedBlockOutputReference(this, "block");
  public get block() {
    return this._block;
  }

  // maximal_rate - computed: true, optional: false, required: false
  public get maximalRate() {
    return this.getNumberAttribute('maximal_rate');
  }
}
export interface DataScmDosProtectionProfileFloodUdp {
}

export function dataScmDosProtectionProfileFloodUdpToTerraform(struct?: DataScmDosProtectionProfileFloodUdp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmDosProtectionProfileFloodUdpToHclTerraform(struct?: DataScmDosProtectionProfileFloodUdp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmDosProtectionProfileFloodUdpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmDosProtectionProfileFloodUdp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmDosProtectionProfileFloodUdp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // red - computed: true, optional: false, required: false
  private _red = new DataScmDosProtectionProfileFloodUdpRedOutputReference(this, "red");
  public get red() {
    return this._red;
  }
}
export interface DataScmDosProtectionProfileFlood {
}

export function dataScmDosProtectionProfileFloodToTerraform(struct?: DataScmDosProtectionProfileFlood): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmDosProtectionProfileFloodToHclTerraform(struct?: DataScmDosProtectionProfileFlood): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmDosProtectionProfileFloodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmDosProtectionProfileFlood | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmDosProtectionProfileFlood | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // icmp - computed: true, optional: false, required: false
  private _icmp = new DataScmDosProtectionProfileFloodIcmpOutputReference(this, "icmp");
  public get icmp() {
    return this._icmp;
  }

  // icmpv6 - computed: true, optional: false, required: false
  private _icmpv6 = new DataScmDosProtectionProfileFloodIcmpv6OutputReference(this, "icmpv6");
  public get icmpv6() {
    return this._icmpv6;
  }

  // other_ip - computed: true, optional: false, required: false
  private _otherIp = new DataScmDosProtectionProfileFloodOtherIpOutputReference(this, "other_ip");
  public get otherIp() {
    return this._otherIp;
  }

  // tcp_syn - computed: true, optional: false, required: false
  private _tcpSyn = new DataScmDosProtectionProfileFloodTcpSynOutputReference(this, "tcp_syn");
  public get tcpSyn() {
    return this._tcpSyn;
  }

  // udp - computed: true, optional: false, required: false
  private _udp = new DataScmDosProtectionProfileFloodUdpOutputReference(this, "udp");
  public get udp() {
    return this._udp;
  }
}
export interface DataScmDosProtectionProfileResourceSessions {
}

export function dataScmDosProtectionProfileResourceSessionsToTerraform(struct?: DataScmDosProtectionProfileResourceSessions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmDosProtectionProfileResourceSessionsToHclTerraform(struct?: DataScmDosProtectionProfileResourceSessions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmDosProtectionProfileResourceSessionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmDosProtectionProfileResourceSessions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmDosProtectionProfileResourceSessions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // max_concurrent_limit - computed: true, optional: false, required: false
  public get maxConcurrentLimit() {
    return this.getNumberAttribute('max_concurrent_limit');
  }
}
export interface DataScmDosProtectionProfileResource {
}

export function dataScmDosProtectionProfileResourceToTerraform(struct?: DataScmDosProtectionProfileResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmDosProtectionProfileResourceToHclTerraform(struct?: DataScmDosProtectionProfileResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmDosProtectionProfileResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmDosProtectionProfileResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmDosProtectionProfileResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sessions - computed: true, optional: false, required: false
  private _sessions = new DataScmDosProtectionProfileResourceSessionsOutputReference(this, "sessions");
  public get sessions() {
    return this._sessions;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/data-sources/dos_protection_profile scm_dos_protection_profile}
*/
export class DataScmDosProtectionProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_dos_protection_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataScmDosProtectionProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataScmDosProtectionProfile to import
  * @param importFromId The id of the existing DataScmDosProtectionProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/data-sources/dos_protection_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataScmDosProtectionProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_dos_protection_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/data-sources/dos_protection_profile scm_dos_protection_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataScmDosProtectionProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataScmDosProtectionProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_dos_protection_profile',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.4',
        providerVersionConstraint: '1.0.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device - computed: true, optional: false, required: false
  public get device() {
    return this.getStringAttribute('device');
  }

  // flood - computed: true, optional: false, required: false
  private _flood = new DataScmDosProtectionProfileFloodOutputReference(this, "flood");
  public get flood() {
    return this._flood;
  }

  // folder - computed: true, optional: false, required: false
  public get folder() {
    return this.getStringAttribute('folder');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // resource - computed: true, optional: false, required: false
  private _resource = new DataScmDosProtectionProfileResourceOutputReference(this, "resource");
  public get resource() {
    return this._resource;
  }

  // snippet - computed: true, optional: false, required: false
  public get snippet() {
    return this.getStringAttribute('snippet');
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
