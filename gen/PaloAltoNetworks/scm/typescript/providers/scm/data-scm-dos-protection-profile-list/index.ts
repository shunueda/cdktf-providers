// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/dos_protection_profile_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataScmDosProtectionProfileListConfig extends cdktf.TerraformMetaArguments {
  /**
  * The device of the item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/dos_protection_profile_list#device DataScmDosProtectionProfileList#device}
  */
  readonly device?: string;
  /**
  * The folder of the item. Default: Shared.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/dos_protection_profile_list#folder DataScmDosProtectionProfileList#folder}
  */
  readonly folder?: string;
  /**
  * The max number of items to return. Default: 200.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/dos_protection_profile_list#limit DataScmDosProtectionProfileList#limit}
  */
  readonly limit?: number;
  /**
  * The name of the item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/dos_protection_profile_list#name DataScmDosProtectionProfileList#name}
  */
  readonly name?: string;
  /**
  * The offset of the first item to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/dos_protection_profile_list#offset DataScmDosProtectionProfileList#offset}
  */
  readonly offset?: number;
  /**
  * The snippet of the item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/dos_protection_profile_list#snippet DataScmDosProtectionProfileList#snippet}
  */
  readonly snippet?: string;
}
export interface DataScmDosProtectionProfileListDataFloodIcmpRedBlock {
}

export function dataScmDosProtectionProfileListDataFloodIcmpRedBlockToTerraform(struct?: DataScmDosProtectionProfileListDataFloodIcmpRedBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmDosProtectionProfileListDataFloodIcmpRedBlockToHclTerraform(struct?: DataScmDosProtectionProfileListDataFloodIcmpRedBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmDosProtectionProfileListDataFloodIcmpRedBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmDosProtectionProfileListDataFloodIcmpRedBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmDosProtectionProfileListDataFloodIcmpRedBlock | undefined) {
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
export interface DataScmDosProtectionProfileListDataFloodIcmpRed {
}

export function dataScmDosProtectionProfileListDataFloodIcmpRedToTerraform(struct?: DataScmDosProtectionProfileListDataFloodIcmpRed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmDosProtectionProfileListDataFloodIcmpRedToHclTerraform(struct?: DataScmDosProtectionProfileListDataFloodIcmpRed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmDosProtectionProfileListDataFloodIcmpRedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmDosProtectionProfileListDataFloodIcmpRed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmDosProtectionProfileListDataFloodIcmpRed | undefined) {
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
  private _block = new DataScmDosProtectionProfileListDataFloodIcmpRedBlockOutputReference(this, "block");
  public get block() {
    return this._block;
  }

  // maximal_rate - computed: true, optional: false, required: false
  public get maximalRate() {
    return this.getNumberAttribute('maximal_rate');
  }
}
export interface DataScmDosProtectionProfileListDataFloodIcmp {
}

export function dataScmDosProtectionProfileListDataFloodIcmpToTerraform(struct?: DataScmDosProtectionProfileListDataFloodIcmp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmDosProtectionProfileListDataFloodIcmpToHclTerraform(struct?: DataScmDosProtectionProfileListDataFloodIcmp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmDosProtectionProfileListDataFloodIcmpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmDosProtectionProfileListDataFloodIcmp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmDosProtectionProfileListDataFloodIcmp | undefined) {
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
  private _red = new DataScmDosProtectionProfileListDataFloodIcmpRedOutputReference(this, "red");
  public get red() {
    return this._red;
  }
}
export interface DataScmDosProtectionProfileListDataFloodIcmpv6RedBlock {
}

export function dataScmDosProtectionProfileListDataFloodIcmpv6RedBlockToTerraform(struct?: DataScmDosProtectionProfileListDataFloodIcmpv6RedBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmDosProtectionProfileListDataFloodIcmpv6RedBlockToHclTerraform(struct?: DataScmDosProtectionProfileListDataFloodIcmpv6RedBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmDosProtectionProfileListDataFloodIcmpv6RedBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmDosProtectionProfileListDataFloodIcmpv6RedBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmDosProtectionProfileListDataFloodIcmpv6RedBlock | undefined) {
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
export interface DataScmDosProtectionProfileListDataFloodIcmpv6Red {
}

export function dataScmDosProtectionProfileListDataFloodIcmpv6RedToTerraform(struct?: DataScmDosProtectionProfileListDataFloodIcmpv6Red): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmDosProtectionProfileListDataFloodIcmpv6RedToHclTerraform(struct?: DataScmDosProtectionProfileListDataFloodIcmpv6Red): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmDosProtectionProfileListDataFloodIcmpv6RedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmDosProtectionProfileListDataFloodIcmpv6Red | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmDosProtectionProfileListDataFloodIcmpv6Red | undefined) {
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
  private _block = new DataScmDosProtectionProfileListDataFloodIcmpv6RedBlockOutputReference(this, "block");
  public get block() {
    return this._block;
  }

  // maximal_rate - computed: true, optional: false, required: false
  public get maximalRate() {
    return this.getNumberAttribute('maximal_rate');
  }
}
export interface DataScmDosProtectionProfileListDataFloodIcmpv6 {
}

export function dataScmDosProtectionProfileListDataFloodIcmpv6ToTerraform(struct?: DataScmDosProtectionProfileListDataFloodIcmpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmDosProtectionProfileListDataFloodIcmpv6ToHclTerraform(struct?: DataScmDosProtectionProfileListDataFloodIcmpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmDosProtectionProfileListDataFloodIcmpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmDosProtectionProfileListDataFloodIcmpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmDosProtectionProfileListDataFloodIcmpv6 | undefined) {
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
  private _red = new DataScmDosProtectionProfileListDataFloodIcmpv6RedOutputReference(this, "red");
  public get red() {
    return this._red;
  }
}
export interface DataScmDosProtectionProfileListDataFloodOtherIpRedBlock {
}

export function dataScmDosProtectionProfileListDataFloodOtherIpRedBlockToTerraform(struct?: DataScmDosProtectionProfileListDataFloodOtherIpRedBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmDosProtectionProfileListDataFloodOtherIpRedBlockToHclTerraform(struct?: DataScmDosProtectionProfileListDataFloodOtherIpRedBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmDosProtectionProfileListDataFloodOtherIpRedBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmDosProtectionProfileListDataFloodOtherIpRedBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmDosProtectionProfileListDataFloodOtherIpRedBlock | undefined) {
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
export interface DataScmDosProtectionProfileListDataFloodOtherIpRed {
}

export function dataScmDosProtectionProfileListDataFloodOtherIpRedToTerraform(struct?: DataScmDosProtectionProfileListDataFloodOtherIpRed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmDosProtectionProfileListDataFloodOtherIpRedToHclTerraform(struct?: DataScmDosProtectionProfileListDataFloodOtherIpRed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmDosProtectionProfileListDataFloodOtherIpRedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmDosProtectionProfileListDataFloodOtherIpRed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmDosProtectionProfileListDataFloodOtherIpRed | undefined) {
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
  private _block = new DataScmDosProtectionProfileListDataFloodOtherIpRedBlockOutputReference(this, "block");
  public get block() {
    return this._block;
  }

  // maximal_rate - computed: true, optional: false, required: false
  public get maximalRate() {
    return this.getNumberAttribute('maximal_rate');
  }
}
export interface DataScmDosProtectionProfileListDataFloodOtherIp {
}

export function dataScmDosProtectionProfileListDataFloodOtherIpToTerraform(struct?: DataScmDosProtectionProfileListDataFloodOtherIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmDosProtectionProfileListDataFloodOtherIpToHclTerraform(struct?: DataScmDosProtectionProfileListDataFloodOtherIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmDosProtectionProfileListDataFloodOtherIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmDosProtectionProfileListDataFloodOtherIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmDosProtectionProfileListDataFloodOtherIp | undefined) {
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
  private _red = new DataScmDosProtectionProfileListDataFloodOtherIpRedOutputReference(this, "red");
  public get red() {
    return this._red;
  }
}
export interface DataScmDosProtectionProfileListDataFloodTcpSynRedBlock {
}

export function dataScmDosProtectionProfileListDataFloodTcpSynRedBlockToTerraform(struct?: DataScmDosProtectionProfileListDataFloodTcpSynRedBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmDosProtectionProfileListDataFloodTcpSynRedBlockToHclTerraform(struct?: DataScmDosProtectionProfileListDataFloodTcpSynRedBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmDosProtectionProfileListDataFloodTcpSynRedBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmDosProtectionProfileListDataFloodTcpSynRedBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmDosProtectionProfileListDataFloodTcpSynRedBlock | undefined) {
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
export interface DataScmDosProtectionProfileListDataFloodTcpSynRed {
}

export function dataScmDosProtectionProfileListDataFloodTcpSynRedToTerraform(struct?: DataScmDosProtectionProfileListDataFloodTcpSynRed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmDosProtectionProfileListDataFloodTcpSynRedToHclTerraform(struct?: DataScmDosProtectionProfileListDataFloodTcpSynRed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmDosProtectionProfileListDataFloodTcpSynRedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmDosProtectionProfileListDataFloodTcpSynRed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmDosProtectionProfileListDataFloodTcpSynRed | undefined) {
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
  private _block = new DataScmDosProtectionProfileListDataFloodTcpSynRedBlockOutputReference(this, "block");
  public get block() {
    return this._block;
  }

  // maximal_rate - computed: true, optional: false, required: false
  public get maximalRate() {
    return this.getNumberAttribute('maximal_rate');
  }
}
export interface DataScmDosProtectionProfileListDataFloodTcpSynSynCookiesBlock {
}

export function dataScmDosProtectionProfileListDataFloodTcpSynSynCookiesBlockToTerraform(struct?: DataScmDosProtectionProfileListDataFloodTcpSynSynCookiesBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmDosProtectionProfileListDataFloodTcpSynSynCookiesBlockToHclTerraform(struct?: DataScmDosProtectionProfileListDataFloodTcpSynSynCookiesBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmDosProtectionProfileListDataFloodTcpSynSynCookiesBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmDosProtectionProfileListDataFloodTcpSynSynCookiesBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmDosProtectionProfileListDataFloodTcpSynSynCookiesBlock | undefined) {
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
export interface DataScmDosProtectionProfileListDataFloodTcpSynSynCookies {
}

export function dataScmDosProtectionProfileListDataFloodTcpSynSynCookiesToTerraform(struct?: DataScmDosProtectionProfileListDataFloodTcpSynSynCookies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmDosProtectionProfileListDataFloodTcpSynSynCookiesToHclTerraform(struct?: DataScmDosProtectionProfileListDataFloodTcpSynSynCookies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmDosProtectionProfileListDataFloodTcpSynSynCookiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmDosProtectionProfileListDataFloodTcpSynSynCookies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmDosProtectionProfileListDataFloodTcpSynSynCookies | undefined) {
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
  private _block = new DataScmDosProtectionProfileListDataFloodTcpSynSynCookiesBlockOutputReference(this, "block");
  public get block() {
    return this._block;
  }

  // maximal_rate - computed: true, optional: false, required: false
  public get maximalRate() {
    return this.getNumberAttribute('maximal_rate');
  }
}
export interface DataScmDosProtectionProfileListDataFloodTcpSyn {
}

export function dataScmDosProtectionProfileListDataFloodTcpSynToTerraform(struct?: DataScmDosProtectionProfileListDataFloodTcpSyn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmDosProtectionProfileListDataFloodTcpSynToHclTerraform(struct?: DataScmDosProtectionProfileListDataFloodTcpSyn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmDosProtectionProfileListDataFloodTcpSynOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmDosProtectionProfileListDataFloodTcpSyn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmDosProtectionProfileListDataFloodTcpSyn | undefined) {
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
  private _red = new DataScmDosProtectionProfileListDataFloodTcpSynRedOutputReference(this, "red");
  public get red() {
    return this._red;
  }

  // syn_cookies - computed: true, optional: false, required: false
  private _synCookies = new DataScmDosProtectionProfileListDataFloodTcpSynSynCookiesOutputReference(this, "syn_cookies");
  public get synCookies() {
    return this._synCookies;
  }
}
export interface DataScmDosProtectionProfileListDataFloodUdpRedBlock {
}

export function dataScmDosProtectionProfileListDataFloodUdpRedBlockToTerraform(struct?: DataScmDosProtectionProfileListDataFloodUdpRedBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmDosProtectionProfileListDataFloodUdpRedBlockToHclTerraform(struct?: DataScmDosProtectionProfileListDataFloodUdpRedBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmDosProtectionProfileListDataFloodUdpRedBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmDosProtectionProfileListDataFloodUdpRedBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmDosProtectionProfileListDataFloodUdpRedBlock | undefined) {
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
export interface DataScmDosProtectionProfileListDataFloodUdpRed {
}

export function dataScmDosProtectionProfileListDataFloodUdpRedToTerraform(struct?: DataScmDosProtectionProfileListDataFloodUdpRed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmDosProtectionProfileListDataFloodUdpRedToHclTerraform(struct?: DataScmDosProtectionProfileListDataFloodUdpRed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmDosProtectionProfileListDataFloodUdpRedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmDosProtectionProfileListDataFloodUdpRed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmDosProtectionProfileListDataFloodUdpRed | undefined) {
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
  private _block = new DataScmDosProtectionProfileListDataFloodUdpRedBlockOutputReference(this, "block");
  public get block() {
    return this._block;
  }

  // maximal_rate - computed: true, optional: false, required: false
  public get maximalRate() {
    return this.getNumberAttribute('maximal_rate');
  }
}
export interface DataScmDosProtectionProfileListDataFloodUdp {
}

export function dataScmDosProtectionProfileListDataFloodUdpToTerraform(struct?: DataScmDosProtectionProfileListDataFloodUdp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmDosProtectionProfileListDataFloodUdpToHclTerraform(struct?: DataScmDosProtectionProfileListDataFloodUdp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmDosProtectionProfileListDataFloodUdpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmDosProtectionProfileListDataFloodUdp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmDosProtectionProfileListDataFloodUdp | undefined) {
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
  private _red = new DataScmDosProtectionProfileListDataFloodUdpRedOutputReference(this, "red");
  public get red() {
    return this._red;
  }
}
export interface DataScmDosProtectionProfileListDataFlood {
}

export function dataScmDosProtectionProfileListDataFloodToTerraform(struct?: DataScmDosProtectionProfileListDataFlood): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmDosProtectionProfileListDataFloodToHclTerraform(struct?: DataScmDosProtectionProfileListDataFlood): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmDosProtectionProfileListDataFloodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmDosProtectionProfileListDataFlood | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmDosProtectionProfileListDataFlood | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // icmp - computed: true, optional: false, required: false
  private _icmp = new DataScmDosProtectionProfileListDataFloodIcmpOutputReference(this, "icmp");
  public get icmp() {
    return this._icmp;
  }

  // icmpv6 - computed: true, optional: false, required: false
  private _icmpv6 = new DataScmDosProtectionProfileListDataFloodIcmpv6OutputReference(this, "icmpv6");
  public get icmpv6() {
    return this._icmpv6;
  }

  // other_ip - computed: true, optional: false, required: false
  private _otherIp = new DataScmDosProtectionProfileListDataFloodOtherIpOutputReference(this, "other_ip");
  public get otherIp() {
    return this._otherIp;
  }

  // tcp_syn - computed: true, optional: false, required: false
  private _tcpSyn = new DataScmDosProtectionProfileListDataFloodTcpSynOutputReference(this, "tcp_syn");
  public get tcpSyn() {
    return this._tcpSyn;
  }

  // udp - computed: true, optional: false, required: false
  private _udp = new DataScmDosProtectionProfileListDataFloodUdpOutputReference(this, "udp");
  public get udp() {
    return this._udp;
  }
}
export interface DataScmDosProtectionProfileListDataResourceSessions {
}

export function dataScmDosProtectionProfileListDataResourceSessionsToTerraform(struct?: DataScmDosProtectionProfileListDataResourceSessions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmDosProtectionProfileListDataResourceSessionsToHclTerraform(struct?: DataScmDosProtectionProfileListDataResourceSessions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmDosProtectionProfileListDataResourceSessionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmDosProtectionProfileListDataResourceSessions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmDosProtectionProfileListDataResourceSessions | undefined) {
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
export interface DataScmDosProtectionProfileListDataResource {
}

export function dataScmDosProtectionProfileListDataResourceToTerraform(struct?: DataScmDosProtectionProfileListDataResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmDosProtectionProfileListDataResourceToHclTerraform(struct?: DataScmDosProtectionProfileListDataResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmDosProtectionProfileListDataResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmDosProtectionProfileListDataResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmDosProtectionProfileListDataResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sessions - computed: true, optional: false, required: false
  private _sessions = new DataScmDosProtectionProfileListDataResourceSessionsOutputReference(this, "sessions");
  public get sessions() {
    return this._sessions;
  }
}
export interface DataScmDosProtectionProfileListData {
  /**
  * The UUID of the DNS security profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/dos_protection_profile_list#id DataScmDosProtectionProfileList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/dos_protection_profile_list#name DataScmDosProtectionProfileList#name}
  */
  readonly name?: string;
}

export function dataScmDosProtectionProfileListDataToTerraform(struct?: DataScmDosProtectionProfileListData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataScmDosProtectionProfileListDataToHclTerraform(struct?: DataScmDosProtectionProfileListData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataScmDosProtectionProfileListDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataScmDosProtectionProfileListData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmDosProtectionProfileListData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device - computed: true, optional: false, required: false
  public get device() {
    return this.getStringAttribute('device');
  }

  // flood - computed: true, optional: false, required: false
  private _flood = new DataScmDosProtectionProfileListDataFloodOutputReference(this, "flood");
  public get flood() {
    return this._flood;
  }

  // folder - computed: true, optional: false, required: false
  public get folder() {
    return this.getStringAttribute('folder');
  }

  // id - computed: true, optional: false, required: true
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
  private _resource = new DataScmDosProtectionProfileListDataResourceOutputReference(this, "resource");
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
}

export class DataScmDosProtectionProfileListDataList extends cdktf.ComplexList {
  public internalValue? : DataScmDosProtectionProfileListData[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataScmDosProtectionProfileListDataOutputReference {
    return new DataScmDosProtectionProfileListDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/dos_protection_profile_list scm_dos_protection_profile_list}
*/
export class DataScmDosProtectionProfileList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_dos_protection_profile_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataScmDosProtectionProfileList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataScmDosProtectionProfileList to import
  * @param importFromId The id of the existing DataScmDosProtectionProfileList that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/dos_protection_profile_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataScmDosProtectionProfileList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_dos_protection_profile_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/dos_protection_profile_list scm_dos_protection_profile_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataScmDosProtectionProfileListConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataScmDosProtectionProfileListConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'scm_dos_protection_profile_list',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._folder = config.folder;
    this._limit = config.limit;
    this._name = config.name;
    this._offset = config.offset;
    this._snippet = config.snippet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data - computed: true, optional: false, required: false
  private _data = new DataScmDosProtectionProfileListDataList(this, "data", false);
  public get data() {
    return this._data;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // name - computed: false, optional: true, required: false
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

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // snippet - computed: false, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      limit: cdktf.numberToTerraform(this._limit),
      name: cdktf.stringToTerraform(this._name),
      offset: cdktf.numberToTerraform(this._offset),
      snippet: cdktf.stringToTerraform(this._snippet),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      offset: {
        value: cdktf.numberToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
