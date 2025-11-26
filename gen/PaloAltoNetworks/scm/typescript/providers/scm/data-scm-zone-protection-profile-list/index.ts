// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/zone_protection_profile_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataScmZoneProtectionProfileListConfig extends cdktf.TerraformMetaArguments {
  /**
  * The device of the item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/zone_protection_profile_list#device DataScmZoneProtectionProfileList#device}
  */
  readonly device?: string;
  /**
  * The folder of the item. Default: Shared.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/zone_protection_profile_list#folder DataScmZoneProtectionProfileList#folder}
  */
  readonly folder?: string;
  /**
  * The max number of items to return. Default: 200.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/zone_protection_profile_list#limit DataScmZoneProtectionProfileList#limit}
  */
  readonly limit?: number;
  /**
  * The name of the item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/zone_protection_profile_list#name DataScmZoneProtectionProfileList#name}
  */
  readonly name?: string;
  /**
  * The offset of the first item to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/zone_protection_profile_list#offset DataScmZoneProtectionProfileList#offset}
  */
  readonly offset?: number;
  /**
  * The snippet of the item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/zone_protection_profile_list#snippet DataScmZoneProtectionProfileList#snippet}
  */
  readonly snippet?: string;
}
export interface DataScmZoneProtectionProfileListDataFloodIcmpRed {
}

export function dataScmZoneProtectionProfileListDataFloodIcmpRedToTerraform(struct?: DataScmZoneProtectionProfileListDataFloodIcmpRed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmZoneProtectionProfileListDataFloodIcmpRedToHclTerraform(struct?: DataScmZoneProtectionProfileListDataFloodIcmpRed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmZoneProtectionProfileListDataFloodIcmpRedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmZoneProtectionProfileListDataFloodIcmpRed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmZoneProtectionProfileListDataFloodIcmpRed | undefined) {
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

  // maximal_rate - computed: true, optional: false, required: false
  public get maximalRate() {
    return this.getNumberAttribute('maximal_rate');
  }
}
export interface DataScmZoneProtectionProfileListDataFloodIcmp {
}

export function dataScmZoneProtectionProfileListDataFloodIcmpToTerraform(struct?: DataScmZoneProtectionProfileListDataFloodIcmp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmZoneProtectionProfileListDataFloodIcmpToHclTerraform(struct?: DataScmZoneProtectionProfileListDataFloodIcmp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmZoneProtectionProfileListDataFloodIcmpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmZoneProtectionProfileListDataFloodIcmp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmZoneProtectionProfileListDataFloodIcmp | undefined) {
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
  private _red = new DataScmZoneProtectionProfileListDataFloodIcmpRedOutputReference(this, "red");
  public get red() {
    return this._red;
  }
}
export interface DataScmZoneProtectionProfileListDataFloodIcmpv6Red {
}

export function dataScmZoneProtectionProfileListDataFloodIcmpv6RedToTerraform(struct?: DataScmZoneProtectionProfileListDataFloodIcmpv6Red): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmZoneProtectionProfileListDataFloodIcmpv6RedToHclTerraform(struct?: DataScmZoneProtectionProfileListDataFloodIcmpv6Red): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmZoneProtectionProfileListDataFloodIcmpv6RedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmZoneProtectionProfileListDataFloodIcmpv6Red | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmZoneProtectionProfileListDataFloodIcmpv6Red | undefined) {
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

  // maximal_rate - computed: true, optional: false, required: false
  public get maximalRate() {
    return this.getNumberAttribute('maximal_rate');
  }
}
export interface DataScmZoneProtectionProfileListDataFloodIcmpv6 {
}

export function dataScmZoneProtectionProfileListDataFloodIcmpv6ToTerraform(struct?: DataScmZoneProtectionProfileListDataFloodIcmpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmZoneProtectionProfileListDataFloodIcmpv6ToHclTerraform(struct?: DataScmZoneProtectionProfileListDataFloodIcmpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmZoneProtectionProfileListDataFloodIcmpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmZoneProtectionProfileListDataFloodIcmpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmZoneProtectionProfileListDataFloodIcmpv6 | undefined) {
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
  private _red = new DataScmZoneProtectionProfileListDataFloodIcmpv6RedOutputReference(this, "red");
  public get red() {
    return this._red;
  }
}
export interface DataScmZoneProtectionProfileListDataFloodOtherIpRed {
}

export function dataScmZoneProtectionProfileListDataFloodOtherIpRedToTerraform(struct?: DataScmZoneProtectionProfileListDataFloodOtherIpRed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmZoneProtectionProfileListDataFloodOtherIpRedToHclTerraform(struct?: DataScmZoneProtectionProfileListDataFloodOtherIpRed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmZoneProtectionProfileListDataFloodOtherIpRedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmZoneProtectionProfileListDataFloodOtherIpRed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmZoneProtectionProfileListDataFloodOtherIpRed | undefined) {
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

  // maximal_rate - computed: true, optional: false, required: false
  public get maximalRate() {
    return this.getNumberAttribute('maximal_rate');
  }
}
export interface DataScmZoneProtectionProfileListDataFloodOtherIp {
}

export function dataScmZoneProtectionProfileListDataFloodOtherIpToTerraform(struct?: DataScmZoneProtectionProfileListDataFloodOtherIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmZoneProtectionProfileListDataFloodOtherIpToHclTerraform(struct?: DataScmZoneProtectionProfileListDataFloodOtherIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmZoneProtectionProfileListDataFloodOtherIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmZoneProtectionProfileListDataFloodOtherIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmZoneProtectionProfileListDataFloodOtherIp | undefined) {
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
  private _red = new DataScmZoneProtectionProfileListDataFloodOtherIpRedOutputReference(this, "red");
  public get red() {
    return this._red;
  }
}
export interface DataScmZoneProtectionProfileListDataFloodSctpInitRed {
}

export function dataScmZoneProtectionProfileListDataFloodSctpInitRedToTerraform(struct?: DataScmZoneProtectionProfileListDataFloodSctpInitRed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmZoneProtectionProfileListDataFloodSctpInitRedToHclTerraform(struct?: DataScmZoneProtectionProfileListDataFloodSctpInitRed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmZoneProtectionProfileListDataFloodSctpInitRedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmZoneProtectionProfileListDataFloodSctpInitRed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmZoneProtectionProfileListDataFloodSctpInitRed | undefined) {
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

  // maximal_rate - computed: true, optional: false, required: false
  public get maximalRate() {
    return this.getNumberAttribute('maximal_rate');
  }
}
export interface DataScmZoneProtectionProfileListDataFloodSctpInit {
}

export function dataScmZoneProtectionProfileListDataFloodSctpInitToTerraform(struct?: DataScmZoneProtectionProfileListDataFloodSctpInit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmZoneProtectionProfileListDataFloodSctpInitToHclTerraform(struct?: DataScmZoneProtectionProfileListDataFloodSctpInit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmZoneProtectionProfileListDataFloodSctpInitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmZoneProtectionProfileListDataFloodSctpInit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmZoneProtectionProfileListDataFloodSctpInit | undefined) {
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
  private _red = new DataScmZoneProtectionProfileListDataFloodSctpInitRedOutputReference(this, "red");
  public get red() {
    return this._red;
  }
}
export interface DataScmZoneProtectionProfileListDataFloodTcpSynRed {
}

export function dataScmZoneProtectionProfileListDataFloodTcpSynRedToTerraform(struct?: DataScmZoneProtectionProfileListDataFloodTcpSynRed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmZoneProtectionProfileListDataFloodTcpSynRedToHclTerraform(struct?: DataScmZoneProtectionProfileListDataFloodTcpSynRed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmZoneProtectionProfileListDataFloodTcpSynRedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmZoneProtectionProfileListDataFloodTcpSynRed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmZoneProtectionProfileListDataFloodTcpSynRed | undefined) {
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

  // maximal_rate - computed: true, optional: false, required: false
  public get maximalRate() {
    return this.getNumberAttribute('maximal_rate');
  }
}
export interface DataScmZoneProtectionProfileListDataFloodTcpSynSynCookies {
}

export function dataScmZoneProtectionProfileListDataFloodTcpSynSynCookiesToTerraform(struct?: DataScmZoneProtectionProfileListDataFloodTcpSynSynCookies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmZoneProtectionProfileListDataFloodTcpSynSynCookiesToHclTerraform(struct?: DataScmZoneProtectionProfileListDataFloodTcpSynSynCookies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmZoneProtectionProfileListDataFloodTcpSynSynCookiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmZoneProtectionProfileListDataFloodTcpSynSynCookies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmZoneProtectionProfileListDataFloodTcpSynSynCookies | undefined) {
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

  // maximal_rate - computed: true, optional: false, required: false
  public get maximalRate() {
    return this.getNumberAttribute('maximal_rate');
  }
}
export interface DataScmZoneProtectionProfileListDataFloodTcpSyn {
}

export function dataScmZoneProtectionProfileListDataFloodTcpSynToTerraform(struct?: DataScmZoneProtectionProfileListDataFloodTcpSyn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmZoneProtectionProfileListDataFloodTcpSynToHclTerraform(struct?: DataScmZoneProtectionProfileListDataFloodTcpSyn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmZoneProtectionProfileListDataFloodTcpSynOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmZoneProtectionProfileListDataFloodTcpSyn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmZoneProtectionProfileListDataFloodTcpSyn | undefined) {
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
  private _red = new DataScmZoneProtectionProfileListDataFloodTcpSynRedOutputReference(this, "red");
  public get red() {
    return this._red;
  }

  // syn_cookies - computed: true, optional: false, required: false
  private _synCookies = new DataScmZoneProtectionProfileListDataFloodTcpSynSynCookiesOutputReference(this, "syn_cookies");
  public get synCookies() {
    return this._synCookies;
  }
}
export interface DataScmZoneProtectionProfileListDataFloodUdpRed {
}

export function dataScmZoneProtectionProfileListDataFloodUdpRedToTerraform(struct?: DataScmZoneProtectionProfileListDataFloodUdpRed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmZoneProtectionProfileListDataFloodUdpRedToHclTerraform(struct?: DataScmZoneProtectionProfileListDataFloodUdpRed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmZoneProtectionProfileListDataFloodUdpRedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmZoneProtectionProfileListDataFloodUdpRed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmZoneProtectionProfileListDataFloodUdpRed | undefined) {
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

  // maximal_rate - computed: true, optional: false, required: false
  public get maximalRate() {
    return this.getNumberAttribute('maximal_rate');
  }
}
export interface DataScmZoneProtectionProfileListDataFloodUdp {
}

export function dataScmZoneProtectionProfileListDataFloodUdpToTerraform(struct?: DataScmZoneProtectionProfileListDataFloodUdp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmZoneProtectionProfileListDataFloodUdpToHclTerraform(struct?: DataScmZoneProtectionProfileListDataFloodUdp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmZoneProtectionProfileListDataFloodUdpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmZoneProtectionProfileListDataFloodUdp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmZoneProtectionProfileListDataFloodUdp | undefined) {
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
  private _red = new DataScmZoneProtectionProfileListDataFloodUdpRedOutputReference(this, "red");
  public get red() {
    return this._red;
  }
}
export interface DataScmZoneProtectionProfileListDataFlood {
}

export function dataScmZoneProtectionProfileListDataFloodToTerraform(struct?: DataScmZoneProtectionProfileListDataFlood): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmZoneProtectionProfileListDataFloodToHclTerraform(struct?: DataScmZoneProtectionProfileListDataFlood): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmZoneProtectionProfileListDataFloodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmZoneProtectionProfileListDataFlood | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmZoneProtectionProfileListDataFlood | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // icmp - computed: true, optional: false, required: false
  private _icmp = new DataScmZoneProtectionProfileListDataFloodIcmpOutputReference(this, "icmp");
  public get icmp() {
    return this._icmp;
  }

  // icmpv6 - computed: true, optional: false, required: false
  private _icmpv6 = new DataScmZoneProtectionProfileListDataFloodIcmpv6OutputReference(this, "icmpv6");
  public get icmpv6() {
    return this._icmpv6;
  }

  // other_ip - computed: true, optional: false, required: false
  private _otherIp = new DataScmZoneProtectionProfileListDataFloodOtherIpOutputReference(this, "other_ip");
  public get otherIp() {
    return this._otherIp;
  }

  // sctp_init - computed: true, optional: false, required: false
  private _sctpInit = new DataScmZoneProtectionProfileListDataFloodSctpInitOutputReference(this, "sctp_init");
  public get sctpInit() {
    return this._sctpInit;
  }

  // tcp_syn - computed: true, optional: false, required: false
  private _tcpSyn = new DataScmZoneProtectionProfileListDataFloodTcpSynOutputReference(this, "tcp_syn");
  public get tcpSyn() {
    return this._tcpSyn;
  }

  // udp - computed: true, optional: false, required: false
  private _udp = new DataScmZoneProtectionProfileListDataFloodUdpOutputReference(this, "udp");
  public get udp() {
    return this._udp;
  }
}
export interface DataScmZoneProtectionProfileListDataIpv6FilterExtHdr {
}

export function dataScmZoneProtectionProfileListDataIpv6FilterExtHdrToTerraform(struct?: DataScmZoneProtectionProfileListDataIpv6FilterExtHdr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmZoneProtectionProfileListDataIpv6FilterExtHdrToHclTerraform(struct?: DataScmZoneProtectionProfileListDataIpv6FilterExtHdr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmZoneProtectionProfileListDataIpv6FilterExtHdrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmZoneProtectionProfileListDataIpv6FilterExtHdr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmZoneProtectionProfileListDataIpv6FilterExtHdr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dest_option_hdr - computed: true, optional: false, required: false
  public get destOptionHdr() {
    return this.getBooleanAttribute('dest_option_hdr');
  }

  // hop_by_hop_hdr - computed: true, optional: false, required: false
  public get hopByHopHdr() {
    return this.getBooleanAttribute('hop_by_hop_hdr');
  }

  // routing_hdr - computed: true, optional: false, required: false
  public get routingHdr() {
    return this.getBooleanAttribute('routing_hdr');
  }
}
export interface DataScmZoneProtectionProfileListDataIpv6IgnoreInvPkt {
}

export function dataScmZoneProtectionProfileListDataIpv6IgnoreInvPktToTerraform(struct?: DataScmZoneProtectionProfileListDataIpv6IgnoreInvPkt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmZoneProtectionProfileListDataIpv6IgnoreInvPktToHclTerraform(struct?: DataScmZoneProtectionProfileListDataIpv6IgnoreInvPkt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmZoneProtectionProfileListDataIpv6IgnoreInvPktOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmZoneProtectionProfileListDataIpv6IgnoreInvPkt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmZoneProtectionProfileListDataIpv6IgnoreInvPkt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dest_unreach - computed: true, optional: false, required: false
  public get destUnreach() {
    return this.getBooleanAttribute('dest_unreach');
  }

  // param_problem - computed: true, optional: false, required: false
  public get paramProblem() {
    return this.getBooleanAttribute('param_problem');
  }

  // pkt_too_big - computed: true, optional: false, required: false
  public get pktTooBig() {
    return this.getBooleanAttribute('pkt_too_big');
  }

  // redirect - computed: true, optional: false, required: false
  public get redirect() {
    return this.getBooleanAttribute('redirect');
  }

  // time_exceeded - computed: true, optional: false, required: false
  public get timeExceeded() {
    return this.getBooleanAttribute('time_exceeded');
  }
}
export interface DataScmZoneProtectionProfileListDataIpv6 {
}

export function dataScmZoneProtectionProfileListDataIpv6ToTerraform(struct?: DataScmZoneProtectionProfileListDataIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmZoneProtectionProfileListDataIpv6ToHclTerraform(struct?: DataScmZoneProtectionProfileListDataIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmZoneProtectionProfileListDataIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmZoneProtectionProfileListDataIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmZoneProtectionProfileListDataIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // anycast_source - computed: true, optional: false, required: false
  public get anycastSource() {
    return this.getBooleanAttribute('anycast_source');
  }

  // filter_ext_hdr - computed: true, optional: false, required: false
  private _filterExtHdr = new DataScmZoneProtectionProfileListDataIpv6FilterExtHdrOutputReference(this, "filter_ext_hdr");
  public get filterExtHdr() {
    return this._filterExtHdr;
  }

  // icmpv6_too_big_small_mtu_discard - computed: true, optional: false, required: false
  public get icmpv6TooBigSmallMtuDiscard() {
    return this.getBooleanAttribute('icmpv6_too_big_small_mtu_discard');
  }

  // ignore_inv_pkt - computed: true, optional: false, required: false
  private _ignoreInvPkt = new DataScmZoneProtectionProfileListDataIpv6IgnoreInvPktOutputReference(this, "ignore_inv_pkt");
  public get ignoreInvPkt() {
    return this._ignoreInvPkt;
  }

  // ipv4_compatible_address - computed: true, optional: false, required: false
  public get ipv4CompatibleAddress() {
    return this.getBooleanAttribute('ipv4_compatible_address');
  }

  // needless_fragment_hdr - computed: true, optional: false, required: false
  public get needlessFragmentHdr() {
    return this.getBooleanAttribute('needless_fragment_hdr');
  }

  // options_invalid_ipv6_discard - computed: true, optional: false, required: false
  public get optionsInvalidIpv6Discard() {
    return this.getBooleanAttribute('options_invalid_ipv6_discard');
  }

  // reserved_field_set_discard - computed: true, optional: false, required: false
  public get reservedFieldSetDiscard() {
    return this.getBooleanAttribute('reserved_field_set_discard');
  }

  // routing_header_0 - computed: true, optional: false, required: false
  public get routingHeader0() {
    return this.getBooleanAttribute('routing_header_0');
  }

  // routing_header_1 - computed: true, optional: false, required: false
  public get routingHeader1() {
    return this.getBooleanAttribute('routing_header_1');
  }

  // routing_header_253 - computed: true, optional: false, required: false
  public get routingHeader253() {
    return this.getBooleanAttribute('routing_header_253');
  }

  // routing_header_254 - computed: true, optional: false, required: false
  public get routingHeader254() {
    return this.getBooleanAttribute('routing_header_254');
  }

  // routing_header_255 - computed: true, optional: false, required: false
  public get routingHeader255() {
    return this.getBooleanAttribute('routing_header_255');
  }

  // routing_header_3 - computed: true, optional: false, required: false
  public get routingHeader3() {
    return this.getBooleanAttribute('routing_header_3');
  }

  // routing_header_4_252 - computed: true, optional: false, required: false
  public get routingHeader4252() {
    return this.getBooleanAttribute('routing_header_4_252');
  }
}
export interface DataScmZoneProtectionProfileListDataL2SecGroupTagProtectionTags {
}

export function dataScmZoneProtectionProfileListDataL2SecGroupTagProtectionTagsToTerraform(struct?: DataScmZoneProtectionProfileListDataL2SecGroupTagProtectionTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmZoneProtectionProfileListDataL2SecGroupTagProtectionTagsToHclTerraform(struct?: DataScmZoneProtectionProfileListDataL2SecGroupTagProtectionTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmZoneProtectionProfileListDataL2SecGroupTagProtectionTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmZoneProtectionProfileListDataL2SecGroupTagProtectionTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmZoneProtectionProfileListDataL2SecGroupTagProtectionTags | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getStringAttribute('tag');
  }
}

export class DataScmZoneProtectionProfileListDataL2SecGroupTagProtectionTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataScmZoneProtectionProfileListDataL2SecGroupTagProtectionTagsOutputReference {
    return new DataScmZoneProtectionProfileListDataL2SecGroupTagProtectionTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmZoneProtectionProfileListDataL2SecGroupTagProtection {
}

export function dataScmZoneProtectionProfileListDataL2SecGroupTagProtectionToTerraform(struct?: DataScmZoneProtectionProfileListDataL2SecGroupTagProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmZoneProtectionProfileListDataL2SecGroupTagProtectionToHclTerraform(struct?: DataScmZoneProtectionProfileListDataL2SecGroupTagProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmZoneProtectionProfileListDataL2SecGroupTagProtectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmZoneProtectionProfileListDataL2SecGroupTagProtection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmZoneProtectionProfileListDataL2SecGroupTagProtection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataScmZoneProtectionProfileListDataL2SecGroupTagProtectionTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
}
export interface DataScmZoneProtectionProfileListDataNonIpProtocolProtocol {
}

export function dataScmZoneProtectionProfileListDataNonIpProtocolProtocolToTerraform(struct?: DataScmZoneProtectionProfileListDataNonIpProtocolProtocol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmZoneProtectionProfileListDataNonIpProtocolProtocolToHclTerraform(struct?: DataScmZoneProtectionProfileListDataNonIpProtocolProtocol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmZoneProtectionProfileListDataNonIpProtocolProtocolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmZoneProtectionProfileListDataNonIpProtocolProtocol | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmZoneProtectionProfileListDataNonIpProtocolProtocol | undefined) {
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

  // ether_type - computed: true, optional: false, required: false
  public get etherType() {
    return this.getStringAttribute('ether_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataScmZoneProtectionProfileListDataNonIpProtocolProtocolList extends cdktf.ComplexList {

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
  public get(index: number): DataScmZoneProtectionProfileListDataNonIpProtocolProtocolOutputReference {
    return new DataScmZoneProtectionProfileListDataNonIpProtocolProtocolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmZoneProtectionProfileListDataNonIpProtocol {
}

export function dataScmZoneProtectionProfileListDataNonIpProtocolToTerraform(struct?: DataScmZoneProtectionProfileListDataNonIpProtocol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmZoneProtectionProfileListDataNonIpProtocolToHclTerraform(struct?: DataScmZoneProtectionProfileListDataNonIpProtocol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmZoneProtectionProfileListDataNonIpProtocolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmZoneProtectionProfileListDataNonIpProtocol | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmZoneProtectionProfileListDataNonIpProtocol | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // list_type - computed: true, optional: false, required: false
  public get listType() {
    return this.getStringAttribute('list_type');
  }

  // protocol - computed: true, optional: false, required: false
  private _protocol = new DataScmZoneProtectionProfileListDataNonIpProtocolProtocolList(this, "protocol", false);
  public get protocol() {
    return this._protocol;
  }
}
export interface DataScmZoneProtectionProfileListDataScanActionAlert {
}

export function dataScmZoneProtectionProfileListDataScanActionAlertToTerraform(struct?: DataScmZoneProtectionProfileListDataScanActionAlert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmZoneProtectionProfileListDataScanActionAlertToHclTerraform(struct?: DataScmZoneProtectionProfileListDataScanActionAlert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmZoneProtectionProfileListDataScanActionAlertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmZoneProtectionProfileListDataScanActionAlert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmZoneProtectionProfileListDataScanActionAlert | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmZoneProtectionProfileListDataScanActionAllow {
}

export function dataScmZoneProtectionProfileListDataScanActionAllowToTerraform(struct?: DataScmZoneProtectionProfileListDataScanActionAllow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmZoneProtectionProfileListDataScanActionAllowToHclTerraform(struct?: DataScmZoneProtectionProfileListDataScanActionAllow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmZoneProtectionProfileListDataScanActionAllowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmZoneProtectionProfileListDataScanActionAllow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmZoneProtectionProfileListDataScanActionAllow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmZoneProtectionProfileListDataScanActionBlock {
}

export function dataScmZoneProtectionProfileListDataScanActionBlockToTerraform(struct?: DataScmZoneProtectionProfileListDataScanActionBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmZoneProtectionProfileListDataScanActionBlockToHclTerraform(struct?: DataScmZoneProtectionProfileListDataScanActionBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmZoneProtectionProfileListDataScanActionBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmZoneProtectionProfileListDataScanActionBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmZoneProtectionProfileListDataScanActionBlock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmZoneProtectionProfileListDataScanActionBlockIp {
}

export function dataScmZoneProtectionProfileListDataScanActionBlockIpToTerraform(struct?: DataScmZoneProtectionProfileListDataScanActionBlockIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmZoneProtectionProfileListDataScanActionBlockIpToHclTerraform(struct?: DataScmZoneProtectionProfileListDataScanActionBlockIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmZoneProtectionProfileListDataScanActionBlockIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmZoneProtectionProfileListDataScanActionBlockIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmZoneProtectionProfileListDataScanActionBlockIp | undefined) {
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

  // track_by - computed: true, optional: false, required: false
  public get trackBy() {
    return this.getStringAttribute('track_by');
  }
}
export interface DataScmZoneProtectionProfileListDataScanAction {
}

export function dataScmZoneProtectionProfileListDataScanActionToTerraform(struct?: DataScmZoneProtectionProfileListDataScanAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmZoneProtectionProfileListDataScanActionToHclTerraform(struct?: DataScmZoneProtectionProfileListDataScanAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmZoneProtectionProfileListDataScanActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmZoneProtectionProfileListDataScanAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmZoneProtectionProfileListDataScanAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alert - computed: true, optional: false, required: false
  private _alert = new DataScmZoneProtectionProfileListDataScanActionAlertOutputReference(this, "alert");
  public get alert() {
    return this._alert;
  }

  // allow - computed: true, optional: false, required: false
  private _allow = new DataScmZoneProtectionProfileListDataScanActionAllowOutputReference(this, "allow");
  public get allow() {
    return this._allow;
  }

  // block - computed: true, optional: false, required: false
  private _block = new DataScmZoneProtectionProfileListDataScanActionBlockOutputReference(this, "block");
  public get block() {
    return this._block;
  }

  // block_ip - computed: true, optional: false, required: false
  private _blockIp = new DataScmZoneProtectionProfileListDataScanActionBlockIpOutputReference(this, "block_ip");
  public get blockIp() {
    return this._blockIp;
  }
}
export interface DataScmZoneProtectionProfileListDataScan {
}

export function dataScmZoneProtectionProfileListDataScanToTerraform(struct?: DataScmZoneProtectionProfileListDataScan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmZoneProtectionProfileListDataScanToHclTerraform(struct?: DataScmZoneProtectionProfileListDataScan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmZoneProtectionProfileListDataScanOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmZoneProtectionProfileListDataScan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmZoneProtectionProfileListDataScan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  private _action = new DataScmZoneProtectionProfileListDataScanActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getNumberAttribute('interval');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
}

export class DataScmZoneProtectionProfileListDataScanList extends cdktf.ComplexList {

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
  public get(index: number): DataScmZoneProtectionProfileListDataScanOutputReference {
    return new DataScmZoneProtectionProfileListDataScanOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmZoneProtectionProfileListDataScanWhiteListStruct {
}

export function dataScmZoneProtectionProfileListDataScanWhiteListStructToTerraform(struct?: DataScmZoneProtectionProfileListDataScanWhiteListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmZoneProtectionProfileListDataScanWhiteListStructToHclTerraform(struct?: DataScmZoneProtectionProfileListDataScanWhiteListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmZoneProtectionProfileListDataScanWhiteListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmZoneProtectionProfileListDataScanWhiteListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmZoneProtectionProfileListDataScanWhiteListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4 - computed: true, optional: false, required: false
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }

  // ipv6 - computed: true, optional: false, required: false
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataScmZoneProtectionProfileListDataScanWhiteListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataScmZoneProtectionProfileListDataScanWhiteListStructOutputReference {
    return new DataScmZoneProtectionProfileListDataScanWhiteListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmZoneProtectionProfileListData {
  /**
  * UUID of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/zone_protection_profile_list#id DataScmZoneProtectionProfileList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/zone_protection_profile_list#name DataScmZoneProtectionProfileList#name}
  */
  readonly name?: string;
}

export function dataScmZoneProtectionProfileListDataToTerraform(struct?: DataScmZoneProtectionProfileListData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataScmZoneProtectionProfileListDataToHclTerraform(struct?: DataScmZoneProtectionProfileListData): any {
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

export class DataScmZoneProtectionProfileListDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmZoneProtectionProfileListData | undefined {
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

  public set internalValue(value: DataScmZoneProtectionProfileListData | undefined) {
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

  // asymmetric_path - computed: true, optional: false, required: false
  public get asymmetricPath() {
    return this.getStringAttribute('asymmetric_path');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device - computed: true, optional: false, required: false
  public get device() {
    return this.getStringAttribute('device');
  }

  // discard_icmp_embedded_error - computed: true, optional: false, required: false
  public get discardIcmpEmbeddedError() {
    return this.getBooleanAttribute('discard_icmp_embedded_error');
  }

  // flood - computed: true, optional: false, required: false
  private _flood = new DataScmZoneProtectionProfileListDataFloodOutputReference(this, "flood");
  public get flood() {
    return this._flood;
  }

  // folder - computed: true, optional: false, required: false
  public get folder() {
    return this.getStringAttribute('folder');
  }

  // fragmented_traffic_discard - computed: true, optional: false, required: false
  public get fragmentedTrafficDiscard() {
    return this.getBooleanAttribute('fragmented_traffic_discard');
  }

  // icmp_frag_discard - computed: true, optional: false, required: false
  public get icmpFragDiscard() {
    return this.getBooleanAttribute('icmp_frag_discard');
  }

  // icmp_large_packet_discard - computed: true, optional: false, required: false
  public get icmpLargePacketDiscard() {
    return this.getBooleanAttribute('icmp_large_packet_discard');
  }

  // icmp_ping_zero_id_discard - computed: true, optional: false, required: false
  public get icmpPingZeroIdDiscard() {
    return this.getBooleanAttribute('icmp_ping_zero_id_discard');
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

  // ipv6 - computed: true, optional: false, required: false
  private _ipv6 = new DataScmZoneProtectionProfileListDataIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }

  // l2_sec_group_tag_protection - computed: true, optional: false, required: false
  private _l2SecGroupTagProtection = new DataScmZoneProtectionProfileListDataL2SecGroupTagProtectionOutputReference(this, "l2_sec_group_tag_protection");
  public get l2SecGroupTagProtection() {
    return this._l2SecGroupTagProtection;
  }

  // loose_source_routing_discard - computed: true, optional: false, required: false
  public get looseSourceRoutingDiscard() {
    return this.getBooleanAttribute('loose_source_routing_discard');
  }

  // malformed_option_discard - computed: true, optional: false, required: false
  public get malformedOptionDiscard() {
    return this.getBooleanAttribute('malformed_option_discard');
  }

  // mismatched_overlapping_tcp_segment_discard - computed: true, optional: false, required: false
  public get mismatchedOverlappingTcpSegmentDiscard() {
    return this.getBooleanAttribute('mismatched_overlapping_tcp_segment_discard');
  }

  // mptcp_option_strip - computed: true, optional: false, required: false
  public get mptcpOptionStrip() {
    return this.getStringAttribute('mptcp_option_strip');
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

  // non_ip_protocol - computed: true, optional: false, required: false
  private _nonIpProtocol = new DataScmZoneProtectionProfileListDataNonIpProtocolOutputReference(this, "non_ip_protocol");
  public get nonIpProtocol() {
    return this._nonIpProtocol;
  }

  // record_route_discard - computed: true, optional: false, required: false
  public get recordRouteDiscard() {
    return this.getBooleanAttribute('record_route_discard');
  }

  // reject_non_syn_tcp - computed: true, optional: false, required: false
  public get rejectNonSynTcp() {
    return this.getStringAttribute('reject_non_syn_tcp');
  }

  // scan - computed: true, optional: false, required: false
  private _scan = new DataScmZoneProtectionProfileListDataScanList(this, "scan", false);
  public get scan() {
    return this._scan;
  }

  // scan_white_list - computed: true, optional: false, required: false
  private _scanWhiteList = new DataScmZoneProtectionProfileListDataScanWhiteListStructList(this, "scan_white_list", false);
  public get scanWhiteList() {
    return this._scanWhiteList;
  }

  // security_discard - computed: true, optional: false, required: false
  public get securityDiscard() {
    return this.getBooleanAttribute('security_discard');
  }

  // snippet - computed: true, optional: false, required: false
  public get snippet() {
    return this.getStringAttribute('snippet');
  }

  // spoofed_ip_discard - computed: true, optional: false, required: false
  public get spoofedIpDiscard() {
    return this.getBooleanAttribute('spoofed_ip_discard');
  }

  // stream_id_discard - computed: true, optional: false, required: false
  public get streamIdDiscard() {
    return this.getBooleanAttribute('stream_id_discard');
  }

  // strict_ip_check - computed: true, optional: false, required: false
  public get strictIpCheck() {
    return this.getBooleanAttribute('strict_ip_check');
  }

  // strict_source_routing_discard - computed: true, optional: false, required: false
  public get strictSourceRoutingDiscard() {
    return this.getBooleanAttribute('strict_source_routing_discard');
  }

  // suppress_icmp_needfrag - computed: true, optional: false, required: false
  public get suppressIcmpNeedfrag() {
    return this.getBooleanAttribute('suppress_icmp_needfrag');
  }

  // suppress_icmp_timeexceeded - computed: true, optional: false, required: false
  public get suppressIcmpTimeexceeded() {
    return this.getBooleanAttribute('suppress_icmp_timeexceeded');
  }

  // tcp_fast_open_and_data_strip - computed: true, optional: false, required: false
  public get tcpFastOpenAndDataStrip() {
    return this.getBooleanAttribute('tcp_fast_open_and_data_strip');
  }

  // tcp_handshake_discard - computed: true, optional: false, required: false
  public get tcpHandshakeDiscard() {
    return this.getBooleanAttribute('tcp_handshake_discard');
  }

  // tcp_syn_with_data_discard - computed: true, optional: false, required: false
  public get tcpSynWithDataDiscard() {
    return this.getBooleanAttribute('tcp_syn_with_data_discard');
  }

  // tcp_synack_with_data_discard - computed: true, optional: false, required: false
  public get tcpSynackWithDataDiscard() {
    return this.getBooleanAttribute('tcp_synack_with_data_discard');
  }

  // tcp_timestamp_strip - computed: true, optional: false, required: false
  public get tcpTimestampStrip() {
    return this.getBooleanAttribute('tcp_timestamp_strip');
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // timestamp_discard - computed: true, optional: false, required: false
  public get timestampDiscard() {
    return this.getBooleanAttribute('timestamp_discard');
  }

  // unknown_option_discard - computed: true, optional: false, required: false
  public get unknownOptionDiscard() {
    return this.getBooleanAttribute('unknown_option_discard');
  }
}

export class DataScmZoneProtectionProfileListDataList extends cdktf.ComplexList {
  public internalValue? : DataScmZoneProtectionProfileListData[] | cdktf.IResolvable

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
  public get(index: number): DataScmZoneProtectionProfileListDataOutputReference {
    return new DataScmZoneProtectionProfileListDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/zone_protection_profile_list scm_zone_protection_profile_list}
*/
export class DataScmZoneProtectionProfileList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_zone_protection_profile_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataScmZoneProtectionProfileList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataScmZoneProtectionProfileList to import
  * @param importFromId The id of the existing DataScmZoneProtectionProfileList that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/zone_protection_profile_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataScmZoneProtectionProfileList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_zone_protection_profile_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/zone_protection_profile_list scm_zone_protection_profile_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataScmZoneProtectionProfileListConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataScmZoneProtectionProfileListConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'scm_zone_protection_profile_list',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.5',
        providerVersionConstraint: '1.0.5'
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
  private _data = new DataScmZoneProtectionProfileListDataList(this, "data", false);
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
