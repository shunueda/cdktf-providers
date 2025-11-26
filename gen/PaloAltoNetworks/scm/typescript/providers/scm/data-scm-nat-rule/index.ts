// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/nat_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataScmNatRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * UUID of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/nat_rule#id DataScmNatRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * NAT rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/nat_rule#name DataScmNatRule#name}
  */
  readonly name?: string;
}
export interface DataScmNatRuleDestinationTranslationDnsRewrite {
}

export function dataScmNatRuleDestinationTranslationDnsRewriteToTerraform(struct?: DataScmNatRuleDestinationTranslationDnsRewrite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmNatRuleDestinationTranslationDnsRewriteToHclTerraform(struct?: DataScmNatRuleDestinationTranslationDnsRewrite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmNatRuleDestinationTranslationDnsRewriteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmNatRuleDestinationTranslationDnsRewrite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmNatRuleDestinationTranslationDnsRewrite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
  }
}
export interface DataScmNatRuleDestinationTranslation {
}

export function dataScmNatRuleDestinationTranslationToTerraform(struct?: DataScmNatRuleDestinationTranslation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmNatRuleDestinationTranslationToHclTerraform(struct?: DataScmNatRuleDestinationTranslation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmNatRuleDestinationTranslationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmNatRuleDestinationTranslation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmNatRuleDestinationTranslation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns_rewrite - computed: true, optional: false, required: false
  private _dnsRewrite = new DataScmNatRuleDestinationTranslationDnsRewriteOutputReference(this, "dns_rewrite");
  public get dnsRewrite() {
    return this._dnsRewrite;
  }

  // translated_address - computed: true, optional: false, required: false
  public get translatedAddress() {
    return this.getStringAttribute('translated_address');
  }

  // translated_port - computed: true, optional: false, required: false
  public get translatedPort() {
    return this.getNumberAttribute('translated_port');
  }
}
export interface DataScmNatRuleDynamicDestinationTranslation {
}

export function dataScmNatRuleDynamicDestinationTranslationToTerraform(struct?: DataScmNatRuleDynamicDestinationTranslation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmNatRuleDynamicDestinationTranslationToHclTerraform(struct?: DataScmNatRuleDynamicDestinationTranslation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmNatRuleDynamicDestinationTranslationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmNatRuleDynamicDestinationTranslation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmNatRuleDynamicDestinationTranslation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // distribution - computed: true, optional: false, required: false
  public get distribution() {
    return this.getStringAttribute('distribution');
  }

  // translated_address - computed: true, optional: false, required: false
  public get translatedAddress() {
    return this.getStringAttribute('translated_address');
  }

  // translated_port - computed: true, optional: false, required: false
  public get translatedPort() {
    return this.getNumberAttribute('translated_port');
  }
}
export interface DataScmNatRuleSourceTranslationDynamicIpFallbackInterfaceAddress {
}

export function dataScmNatRuleSourceTranslationDynamicIpFallbackInterfaceAddressToTerraform(struct?: DataScmNatRuleSourceTranslationDynamicIpFallbackInterfaceAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmNatRuleSourceTranslationDynamicIpFallbackInterfaceAddressToHclTerraform(struct?: DataScmNatRuleSourceTranslationDynamicIpFallbackInterfaceAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmNatRuleSourceTranslationDynamicIpFallbackInterfaceAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmNatRuleSourceTranslationDynamicIpFallbackInterfaceAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmNatRuleSourceTranslationDynamicIpFallbackInterfaceAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // floating_ip - computed: true, optional: false, required: false
  public get floatingIp() {
    return this.getStringAttribute('floating_ip');
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }
}
export interface DataScmNatRuleSourceTranslationDynamicIpFallback {
}

export function dataScmNatRuleSourceTranslationDynamicIpFallbackToTerraform(struct?: DataScmNatRuleSourceTranslationDynamicIpFallback): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmNatRuleSourceTranslationDynamicIpFallbackToHclTerraform(struct?: DataScmNatRuleSourceTranslationDynamicIpFallback): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmNatRuleSourceTranslationDynamicIpFallbackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmNatRuleSourceTranslationDynamicIpFallback | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmNatRuleSourceTranslationDynamicIpFallback | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interface_address - computed: true, optional: false, required: false
  private _interfaceAddress = new DataScmNatRuleSourceTranslationDynamicIpFallbackInterfaceAddressOutputReference(this, "interface_address");
  public get interfaceAddress() {
    return this._interfaceAddress;
  }

  // translated_address - computed: true, optional: false, required: false
  public get translatedAddress() {
    return this.getListAttribute('translated_address');
  }
}
export interface DataScmNatRuleSourceTranslationDynamicIp {
}

export function dataScmNatRuleSourceTranslationDynamicIpToTerraform(struct?: DataScmNatRuleSourceTranslationDynamicIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmNatRuleSourceTranslationDynamicIpToHclTerraform(struct?: DataScmNatRuleSourceTranslationDynamicIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmNatRuleSourceTranslationDynamicIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmNatRuleSourceTranslationDynamicIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmNatRuleSourceTranslationDynamicIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fallback - computed: true, optional: false, required: false
  private _fallback = new DataScmNatRuleSourceTranslationDynamicIpFallbackOutputReference(this, "fallback");
  public get fallback() {
    return this._fallback;
  }

  // translated_address - computed: true, optional: false, required: false
  public get translatedAddress() {
    return this.getListAttribute('translated_address');
  }
}
export interface DataScmNatRuleSourceTranslationDynamicIpAndPortInterfaceAddress {
}

export function dataScmNatRuleSourceTranslationDynamicIpAndPortInterfaceAddressToTerraform(struct?: DataScmNatRuleSourceTranslationDynamicIpAndPortInterfaceAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmNatRuleSourceTranslationDynamicIpAndPortInterfaceAddressToHclTerraform(struct?: DataScmNatRuleSourceTranslationDynamicIpAndPortInterfaceAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmNatRuleSourceTranslationDynamicIpAndPortInterfaceAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmNatRuleSourceTranslationDynamicIpAndPortInterfaceAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmNatRuleSourceTranslationDynamicIpAndPortInterfaceAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // floating_ip - computed: true, optional: false, required: false
  public get floatingIp() {
    return this.getStringAttribute('floating_ip');
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }
}
export interface DataScmNatRuleSourceTranslationDynamicIpAndPort {
}

export function dataScmNatRuleSourceTranslationDynamicIpAndPortToTerraform(struct?: DataScmNatRuleSourceTranslationDynamicIpAndPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmNatRuleSourceTranslationDynamicIpAndPortToHclTerraform(struct?: DataScmNatRuleSourceTranslationDynamicIpAndPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmNatRuleSourceTranslationDynamicIpAndPortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmNatRuleSourceTranslationDynamicIpAndPort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmNatRuleSourceTranslationDynamicIpAndPort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interface_address - computed: true, optional: false, required: false
  private _interfaceAddress = new DataScmNatRuleSourceTranslationDynamicIpAndPortInterfaceAddressOutputReference(this, "interface_address");
  public get interfaceAddress() {
    return this._interfaceAddress;
  }

  // translated_address - computed: true, optional: false, required: false
  public get translatedAddress() {
    return this.getListAttribute('translated_address');
  }
}
export interface DataScmNatRuleSourceTranslationStaticIp {
}

export function dataScmNatRuleSourceTranslationStaticIpToTerraform(struct?: DataScmNatRuleSourceTranslationStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmNatRuleSourceTranslationStaticIpToHclTerraform(struct?: DataScmNatRuleSourceTranslationStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmNatRuleSourceTranslationStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmNatRuleSourceTranslationStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmNatRuleSourceTranslationStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bi_directional - computed: true, optional: false, required: false
  public get biDirectional() {
    return this.getStringAttribute('bi_directional');
  }

  // translated_address - computed: true, optional: false, required: false
  public get translatedAddress() {
    return this.getStringAttribute('translated_address');
  }
}
export interface DataScmNatRuleSourceTranslation {
}

export function dataScmNatRuleSourceTranslationToTerraform(struct?: DataScmNatRuleSourceTranslation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmNatRuleSourceTranslationToHclTerraform(struct?: DataScmNatRuleSourceTranslation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmNatRuleSourceTranslationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmNatRuleSourceTranslation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmNatRuleSourceTranslation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dynamic_ip - computed: true, optional: false, required: false
  private _dynamicIp = new DataScmNatRuleSourceTranslationDynamicIpOutputReference(this, "dynamic_ip");
  public get dynamicIp() {
    return this._dynamicIp;
  }

  // dynamic_ip_and_port - computed: true, optional: false, required: false
  private _dynamicIpAndPort = new DataScmNatRuleSourceTranslationDynamicIpAndPortOutputReference(this, "dynamic_ip_and_port");
  public get dynamicIpAndPort() {
    return this._dynamicIpAndPort;
  }

  // static_ip - computed: true, optional: false, required: false
  private _staticIp = new DataScmNatRuleSourceTranslationStaticIpOutputReference(this, "static_ip");
  public get staticIp() {
    return this._staticIp;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/nat_rule scm_nat_rule}
*/
export class DataScmNatRule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_nat_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataScmNatRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataScmNatRule to import
  * @param importFromId The id of the existing DataScmNatRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/nat_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataScmNatRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_nat_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/nat_rule scm_nat_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataScmNatRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataScmNatRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_nat_rule',
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
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_active_device_binding - computed: true, optional: false, required: false
  public get activeActiveDeviceBinding() {
    return this.getStringAttribute('active_active_device_binding');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // destination - computed: true, optional: false, required: false
  public get destination() {
    return this.getListAttribute('destination');
  }

  // destination_translation - computed: true, optional: false, required: false
  private _destinationTranslation = new DataScmNatRuleDestinationTranslationOutputReference(this, "destination_translation");
  public get destinationTranslation() {
    return this._destinationTranslation;
  }

  // device - computed: true, optional: false, required: false
  public get device() {
    return this.getStringAttribute('device');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // dynamic_destination_translation - computed: true, optional: false, required: false
  private _dynamicDestinationTranslation = new DataScmNatRuleDynamicDestinationTranslationOutputReference(this, "dynamic_destination_translation");
  public get dynamicDestinationTranslation() {
    return this._dynamicDestinationTranslation;
  }

  // folder - computed: true, optional: false, required: false
  public get folder() {
    return this.getStringAttribute('folder');
  }

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getListAttribute('from');
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

  // nat_type - computed: true, optional: false, required: false
  public get natType() {
    return this.getStringAttribute('nat_type');
  }

  // position - computed: true, optional: false, required: false
  public get position() {
    return this.getStringAttribute('position');
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }

  // snippet - computed: true, optional: false, required: false
  public get snippet() {
    return this.getStringAttribute('snippet');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getListAttribute('source');
  }

  // source_translation - computed: true, optional: false, required: false
  private _sourceTranslation = new DataScmNatRuleSourceTranslationOutputReference(this, "source_translation");
  public get sourceTranslation() {
    return this._sourceTranslation;
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getListAttribute('tag');
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // to - computed: true, optional: false, required: false
  public get to() {
    return this.getListAttribute('to');
  }

  // to_interface - computed: true, optional: false, required: false
  public get toInterface() {
    return this.getStringAttribute('to_interface');
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
