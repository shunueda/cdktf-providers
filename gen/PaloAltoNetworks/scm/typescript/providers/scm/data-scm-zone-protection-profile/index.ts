// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/data-sources/zone_protection_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataScmZoneProtectionProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * UUID of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/data-sources/zone_protection_profile#id DataScmZoneProtectionProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/data-sources/zone_protection_profile#name DataScmZoneProtectionProfile#name}
  */
  readonly name?: string;
}
export interface DataScmZoneProtectionProfileFloodIcmpRed {
}

export function dataScmZoneProtectionProfileFloodIcmpRedToTerraform(struct?: DataScmZoneProtectionProfileFloodIcmpRed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmZoneProtectionProfileFloodIcmpRedToHclTerraform(struct?: DataScmZoneProtectionProfileFloodIcmpRed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmZoneProtectionProfileFloodIcmpRedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmZoneProtectionProfileFloodIcmpRed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmZoneProtectionProfileFloodIcmpRed | undefined) {
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
export interface DataScmZoneProtectionProfileFloodIcmp {
}

export function dataScmZoneProtectionProfileFloodIcmpToTerraform(struct?: DataScmZoneProtectionProfileFloodIcmp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmZoneProtectionProfileFloodIcmpToHclTerraform(struct?: DataScmZoneProtectionProfileFloodIcmp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmZoneProtectionProfileFloodIcmpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmZoneProtectionProfileFloodIcmp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmZoneProtectionProfileFloodIcmp | undefined) {
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
  private _red = new DataScmZoneProtectionProfileFloodIcmpRedOutputReference(this, "red");
  public get red() {
    return this._red;
  }
}
export interface DataScmZoneProtectionProfileFloodIcmpv6Red {
}

export function dataScmZoneProtectionProfileFloodIcmpv6RedToTerraform(struct?: DataScmZoneProtectionProfileFloodIcmpv6Red): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmZoneProtectionProfileFloodIcmpv6RedToHclTerraform(struct?: DataScmZoneProtectionProfileFloodIcmpv6Red): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmZoneProtectionProfileFloodIcmpv6RedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmZoneProtectionProfileFloodIcmpv6Red | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmZoneProtectionProfileFloodIcmpv6Red | undefined) {
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
export interface DataScmZoneProtectionProfileFloodIcmpv6 {
}

export function dataScmZoneProtectionProfileFloodIcmpv6ToTerraform(struct?: DataScmZoneProtectionProfileFloodIcmpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmZoneProtectionProfileFloodIcmpv6ToHclTerraform(struct?: DataScmZoneProtectionProfileFloodIcmpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmZoneProtectionProfileFloodIcmpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmZoneProtectionProfileFloodIcmpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmZoneProtectionProfileFloodIcmpv6 | undefined) {
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
  private _red = new DataScmZoneProtectionProfileFloodIcmpv6RedOutputReference(this, "red");
  public get red() {
    return this._red;
  }
}
export interface DataScmZoneProtectionProfileFloodOtherIpRed {
}

export function dataScmZoneProtectionProfileFloodOtherIpRedToTerraform(struct?: DataScmZoneProtectionProfileFloodOtherIpRed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmZoneProtectionProfileFloodOtherIpRedToHclTerraform(struct?: DataScmZoneProtectionProfileFloodOtherIpRed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmZoneProtectionProfileFloodOtherIpRedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmZoneProtectionProfileFloodOtherIpRed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmZoneProtectionProfileFloodOtherIpRed | undefined) {
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
export interface DataScmZoneProtectionProfileFloodOtherIp {
}

export function dataScmZoneProtectionProfileFloodOtherIpToTerraform(struct?: DataScmZoneProtectionProfileFloodOtherIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmZoneProtectionProfileFloodOtherIpToHclTerraform(struct?: DataScmZoneProtectionProfileFloodOtherIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmZoneProtectionProfileFloodOtherIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmZoneProtectionProfileFloodOtherIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmZoneProtectionProfileFloodOtherIp | undefined) {
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
  private _red = new DataScmZoneProtectionProfileFloodOtherIpRedOutputReference(this, "red");
  public get red() {
    return this._red;
  }
}
export interface DataScmZoneProtectionProfileFloodSctpInitRed {
}

export function dataScmZoneProtectionProfileFloodSctpInitRedToTerraform(struct?: DataScmZoneProtectionProfileFloodSctpInitRed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmZoneProtectionProfileFloodSctpInitRedToHclTerraform(struct?: DataScmZoneProtectionProfileFloodSctpInitRed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmZoneProtectionProfileFloodSctpInitRedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmZoneProtectionProfileFloodSctpInitRed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmZoneProtectionProfileFloodSctpInitRed | undefined) {
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
export interface DataScmZoneProtectionProfileFloodSctpInit {
}

export function dataScmZoneProtectionProfileFloodSctpInitToTerraform(struct?: DataScmZoneProtectionProfileFloodSctpInit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmZoneProtectionProfileFloodSctpInitToHclTerraform(struct?: DataScmZoneProtectionProfileFloodSctpInit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmZoneProtectionProfileFloodSctpInitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmZoneProtectionProfileFloodSctpInit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmZoneProtectionProfileFloodSctpInit | undefined) {
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
  private _red = new DataScmZoneProtectionProfileFloodSctpInitRedOutputReference(this, "red");
  public get red() {
    return this._red;
  }
}
export interface DataScmZoneProtectionProfileFloodTcpSynRed {
}

export function dataScmZoneProtectionProfileFloodTcpSynRedToTerraform(struct?: DataScmZoneProtectionProfileFloodTcpSynRed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmZoneProtectionProfileFloodTcpSynRedToHclTerraform(struct?: DataScmZoneProtectionProfileFloodTcpSynRed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmZoneProtectionProfileFloodTcpSynRedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmZoneProtectionProfileFloodTcpSynRed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmZoneProtectionProfileFloodTcpSynRed | undefined) {
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
export interface DataScmZoneProtectionProfileFloodTcpSynSynCookies {
}

export function dataScmZoneProtectionProfileFloodTcpSynSynCookiesToTerraform(struct?: DataScmZoneProtectionProfileFloodTcpSynSynCookies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmZoneProtectionProfileFloodTcpSynSynCookiesToHclTerraform(struct?: DataScmZoneProtectionProfileFloodTcpSynSynCookies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmZoneProtectionProfileFloodTcpSynSynCookiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmZoneProtectionProfileFloodTcpSynSynCookies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmZoneProtectionProfileFloodTcpSynSynCookies | undefined) {
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
export interface DataScmZoneProtectionProfileFloodTcpSyn {
}

export function dataScmZoneProtectionProfileFloodTcpSynToTerraform(struct?: DataScmZoneProtectionProfileFloodTcpSyn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmZoneProtectionProfileFloodTcpSynToHclTerraform(struct?: DataScmZoneProtectionProfileFloodTcpSyn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmZoneProtectionProfileFloodTcpSynOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmZoneProtectionProfileFloodTcpSyn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmZoneProtectionProfileFloodTcpSyn | undefined) {
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
  private _red = new DataScmZoneProtectionProfileFloodTcpSynRedOutputReference(this, "red");
  public get red() {
    return this._red;
  }

  // syn_cookies - computed: true, optional: false, required: false
  private _synCookies = new DataScmZoneProtectionProfileFloodTcpSynSynCookiesOutputReference(this, "syn_cookies");
  public get synCookies() {
    return this._synCookies;
  }
}
export interface DataScmZoneProtectionProfileFloodUdpRed {
}

export function dataScmZoneProtectionProfileFloodUdpRedToTerraform(struct?: DataScmZoneProtectionProfileFloodUdpRed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmZoneProtectionProfileFloodUdpRedToHclTerraform(struct?: DataScmZoneProtectionProfileFloodUdpRed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmZoneProtectionProfileFloodUdpRedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmZoneProtectionProfileFloodUdpRed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmZoneProtectionProfileFloodUdpRed | undefined) {
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
export interface DataScmZoneProtectionProfileFloodUdp {
}

export function dataScmZoneProtectionProfileFloodUdpToTerraform(struct?: DataScmZoneProtectionProfileFloodUdp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmZoneProtectionProfileFloodUdpToHclTerraform(struct?: DataScmZoneProtectionProfileFloodUdp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmZoneProtectionProfileFloodUdpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmZoneProtectionProfileFloodUdp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmZoneProtectionProfileFloodUdp | undefined) {
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
  private _red = new DataScmZoneProtectionProfileFloodUdpRedOutputReference(this, "red");
  public get red() {
    return this._red;
  }
}
export interface DataScmZoneProtectionProfileFlood {
}

export function dataScmZoneProtectionProfileFloodToTerraform(struct?: DataScmZoneProtectionProfileFlood): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmZoneProtectionProfileFloodToHclTerraform(struct?: DataScmZoneProtectionProfileFlood): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmZoneProtectionProfileFloodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmZoneProtectionProfileFlood | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmZoneProtectionProfileFlood | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // icmp - computed: true, optional: false, required: false
  private _icmp = new DataScmZoneProtectionProfileFloodIcmpOutputReference(this, "icmp");
  public get icmp() {
    return this._icmp;
  }

  // icmpv6 - computed: true, optional: false, required: false
  private _icmpv6 = new DataScmZoneProtectionProfileFloodIcmpv6OutputReference(this, "icmpv6");
  public get icmpv6() {
    return this._icmpv6;
  }

  // other_ip - computed: true, optional: false, required: false
  private _otherIp = new DataScmZoneProtectionProfileFloodOtherIpOutputReference(this, "other_ip");
  public get otherIp() {
    return this._otherIp;
  }

  // sctp_init - computed: true, optional: false, required: false
  private _sctpInit = new DataScmZoneProtectionProfileFloodSctpInitOutputReference(this, "sctp_init");
  public get sctpInit() {
    return this._sctpInit;
  }

  // tcp_syn - computed: true, optional: false, required: false
  private _tcpSyn = new DataScmZoneProtectionProfileFloodTcpSynOutputReference(this, "tcp_syn");
  public get tcpSyn() {
    return this._tcpSyn;
  }

  // udp - computed: true, optional: false, required: false
  private _udp = new DataScmZoneProtectionProfileFloodUdpOutputReference(this, "udp");
  public get udp() {
    return this._udp;
  }
}
export interface DataScmZoneProtectionProfileIpv6FilterExtHdr {
}

export function dataScmZoneProtectionProfileIpv6FilterExtHdrToTerraform(struct?: DataScmZoneProtectionProfileIpv6FilterExtHdr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmZoneProtectionProfileIpv6FilterExtHdrToHclTerraform(struct?: DataScmZoneProtectionProfileIpv6FilterExtHdr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmZoneProtectionProfileIpv6FilterExtHdrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmZoneProtectionProfileIpv6FilterExtHdr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmZoneProtectionProfileIpv6FilterExtHdr | undefined) {
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
export interface DataScmZoneProtectionProfileIpv6IgnoreInvPkt {
}

export function dataScmZoneProtectionProfileIpv6IgnoreInvPktToTerraform(struct?: DataScmZoneProtectionProfileIpv6IgnoreInvPkt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmZoneProtectionProfileIpv6IgnoreInvPktToHclTerraform(struct?: DataScmZoneProtectionProfileIpv6IgnoreInvPkt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmZoneProtectionProfileIpv6IgnoreInvPktOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmZoneProtectionProfileIpv6IgnoreInvPkt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmZoneProtectionProfileIpv6IgnoreInvPkt | undefined) {
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
export interface DataScmZoneProtectionProfileIpv6 {
}

export function dataScmZoneProtectionProfileIpv6ToTerraform(struct?: DataScmZoneProtectionProfileIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmZoneProtectionProfileIpv6ToHclTerraform(struct?: DataScmZoneProtectionProfileIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmZoneProtectionProfileIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmZoneProtectionProfileIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmZoneProtectionProfileIpv6 | undefined) {
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
  private _filterExtHdr = new DataScmZoneProtectionProfileIpv6FilterExtHdrOutputReference(this, "filter_ext_hdr");
  public get filterExtHdr() {
    return this._filterExtHdr;
  }

  // icmpv6_too_big_small_mtu_discard - computed: true, optional: false, required: false
  public get icmpv6TooBigSmallMtuDiscard() {
    return this.getBooleanAttribute('icmpv6_too_big_small_mtu_discard');
  }

  // ignore_inv_pkt - computed: true, optional: false, required: false
  private _ignoreInvPkt = new DataScmZoneProtectionProfileIpv6IgnoreInvPktOutputReference(this, "ignore_inv_pkt");
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
export interface DataScmZoneProtectionProfileL2SecGroupTagProtectionTags {
}

export function dataScmZoneProtectionProfileL2SecGroupTagProtectionTagsToTerraform(struct?: DataScmZoneProtectionProfileL2SecGroupTagProtectionTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmZoneProtectionProfileL2SecGroupTagProtectionTagsToHclTerraform(struct?: DataScmZoneProtectionProfileL2SecGroupTagProtectionTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmZoneProtectionProfileL2SecGroupTagProtectionTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmZoneProtectionProfileL2SecGroupTagProtectionTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmZoneProtectionProfileL2SecGroupTagProtectionTags | undefined) {
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

export class DataScmZoneProtectionProfileL2SecGroupTagProtectionTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataScmZoneProtectionProfileL2SecGroupTagProtectionTagsOutputReference {
    return new DataScmZoneProtectionProfileL2SecGroupTagProtectionTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmZoneProtectionProfileL2SecGroupTagProtection {
}

export function dataScmZoneProtectionProfileL2SecGroupTagProtectionToTerraform(struct?: DataScmZoneProtectionProfileL2SecGroupTagProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmZoneProtectionProfileL2SecGroupTagProtectionToHclTerraform(struct?: DataScmZoneProtectionProfileL2SecGroupTagProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmZoneProtectionProfileL2SecGroupTagProtectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmZoneProtectionProfileL2SecGroupTagProtection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmZoneProtectionProfileL2SecGroupTagProtection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataScmZoneProtectionProfileL2SecGroupTagProtectionTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
}
export interface DataScmZoneProtectionProfileNonIpProtocolProtocol {
}

export function dataScmZoneProtectionProfileNonIpProtocolProtocolToTerraform(struct?: DataScmZoneProtectionProfileNonIpProtocolProtocol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmZoneProtectionProfileNonIpProtocolProtocolToHclTerraform(struct?: DataScmZoneProtectionProfileNonIpProtocolProtocol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmZoneProtectionProfileNonIpProtocolProtocolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmZoneProtectionProfileNonIpProtocolProtocol | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmZoneProtectionProfileNonIpProtocolProtocol | undefined) {
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

export class DataScmZoneProtectionProfileNonIpProtocolProtocolList extends cdktf.ComplexList {

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
  public get(index: number): DataScmZoneProtectionProfileNonIpProtocolProtocolOutputReference {
    return new DataScmZoneProtectionProfileNonIpProtocolProtocolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmZoneProtectionProfileNonIpProtocol {
}

export function dataScmZoneProtectionProfileNonIpProtocolToTerraform(struct?: DataScmZoneProtectionProfileNonIpProtocol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmZoneProtectionProfileNonIpProtocolToHclTerraform(struct?: DataScmZoneProtectionProfileNonIpProtocol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmZoneProtectionProfileNonIpProtocolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmZoneProtectionProfileNonIpProtocol | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmZoneProtectionProfileNonIpProtocol | undefined) {
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
  private _protocol = new DataScmZoneProtectionProfileNonIpProtocolProtocolList(this, "protocol", false);
  public get protocol() {
    return this._protocol;
  }
}
export interface DataScmZoneProtectionProfileScanActionAlert {
}

export function dataScmZoneProtectionProfileScanActionAlertToTerraform(struct?: DataScmZoneProtectionProfileScanActionAlert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmZoneProtectionProfileScanActionAlertToHclTerraform(struct?: DataScmZoneProtectionProfileScanActionAlert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmZoneProtectionProfileScanActionAlertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmZoneProtectionProfileScanActionAlert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmZoneProtectionProfileScanActionAlert | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmZoneProtectionProfileScanActionAllow {
}

export function dataScmZoneProtectionProfileScanActionAllowToTerraform(struct?: DataScmZoneProtectionProfileScanActionAllow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmZoneProtectionProfileScanActionAllowToHclTerraform(struct?: DataScmZoneProtectionProfileScanActionAllow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmZoneProtectionProfileScanActionAllowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmZoneProtectionProfileScanActionAllow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmZoneProtectionProfileScanActionAllow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmZoneProtectionProfileScanActionBlock {
}

export function dataScmZoneProtectionProfileScanActionBlockToTerraform(struct?: DataScmZoneProtectionProfileScanActionBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmZoneProtectionProfileScanActionBlockToHclTerraform(struct?: DataScmZoneProtectionProfileScanActionBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmZoneProtectionProfileScanActionBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmZoneProtectionProfileScanActionBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmZoneProtectionProfileScanActionBlock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmZoneProtectionProfileScanActionBlockIp {
}

export function dataScmZoneProtectionProfileScanActionBlockIpToTerraform(struct?: DataScmZoneProtectionProfileScanActionBlockIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmZoneProtectionProfileScanActionBlockIpToHclTerraform(struct?: DataScmZoneProtectionProfileScanActionBlockIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmZoneProtectionProfileScanActionBlockIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmZoneProtectionProfileScanActionBlockIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmZoneProtectionProfileScanActionBlockIp | undefined) {
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
export interface DataScmZoneProtectionProfileScanAction {
}

export function dataScmZoneProtectionProfileScanActionToTerraform(struct?: DataScmZoneProtectionProfileScanAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmZoneProtectionProfileScanActionToHclTerraform(struct?: DataScmZoneProtectionProfileScanAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmZoneProtectionProfileScanActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmZoneProtectionProfileScanAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmZoneProtectionProfileScanAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alert - computed: true, optional: false, required: false
  private _alert = new DataScmZoneProtectionProfileScanActionAlertOutputReference(this, "alert");
  public get alert() {
    return this._alert;
  }

  // allow - computed: true, optional: false, required: false
  private _allow = new DataScmZoneProtectionProfileScanActionAllowOutputReference(this, "allow");
  public get allow() {
    return this._allow;
  }

  // block - computed: true, optional: false, required: false
  private _block = new DataScmZoneProtectionProfileScanActionBlockOutputReference(this, "block");
  public get block() {
    return this._block;
  }

  // block_ip - computed: true, optional: false, required: false
  private _blockIp = new DataScmZoneProtectionProfileScanActionBlockIpOutputReference(this, "block_ip");
  public get blockIp() {
    return this._blockIp;
  }
}
export interface DataScmZoneProtectionProfileScan {
}

export function dataScmZoneProtectionProfileScanToTerraform(struct?: DataScmZoneProtectionProfileScan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmZoneProtectionProfileScanToHclTerraform(struct?: DataScmZoneProtectionProfileScan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmZoneProtectionProfileScanOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmZoneProtectionProfileScan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmZoneProtectionProfileScan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  private _action = new DataScmZoneProtectionProfileScanActionOutputReference(this, "action");
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

export class DataScmZoneProtectionProfileScanList extends cdktf.ComplexList {

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
  public get(index: number): DataScmZoneProtectionProfileScanOutputReference {
    return new DataScmZoneProtectionProfileScanOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmZoneProtectionProfileScanWhiteListStruct {
}

export function dataScmZoneProtectionProfileScanWhiteListStructToTerraform(struct?: DataScmZoneProtectionProfileScanWhiteListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmZoneProtectionProfileScanWhiteListStructToHclTerraform(struct?: DataScmZoneProtectionProfileScanWhiteListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmZoneProtectionProfileScanWhiteListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmZoneProtectionProfileScanWhiteListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmZoneProtectionProfileScanWhiteListStruct | undefined) {
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

export class DataScmZoneProtectionProfileScanWhiteListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataScmZoneProtectionProfileScanWhiteListStructOutputReference {
    return new DataScmZoneProtectionProfileScanWhiteListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/data-sources/zone_protection_profile scm_zone_protection_profile}
*/
export class DataScmZoneProtectionProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_zone_protection_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataScmZoneProtectionProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataScmZoneProtectionProfile to import
  * @param importFromId The id of the existing DataScmZoneProtectionProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/data-sources/zone_protection_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataScmZoneProtectionProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_zone_protection_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/data-sources/zone_protection_profile scm_zone_protection_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataScmZoneProtectionProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataScmZoneProtectionProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_zone_protection_profile',
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
  private _flood = new DataScmZoneProtectionProfileFloodOutputReference(this, "flood");
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

  // ipv6 - computed: true, optional: false, required: false
  private _ipv6 = new DataScmZoneProtectionProfileIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }

  // l2_sec_group_tag_protection - computed: true, optional: false, required: false
  private _l2SecGroupTagProtection = new DataScmZoneProtectionProfileL2SecGroupTagProtectionOutputReference(this, "l2_sec_group_tag_protection");
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
  private _nonIpProtocol = new DataScmZoneProtectionProfileNonIpProtocolOutputReference(this, "non_ip_protocol");
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
  private _scan = new DataScmZoneProtectionProfileScanList(this, "scan", false);
  public get scan() {
    return this._scan;
  }

  // scan_white_list - computed: true, optional: false, required: false
  private _scanWhiteList = new DataScmZoneProtectionProfileScanWhiteListStructList(this, "scan_white_list", false);
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
