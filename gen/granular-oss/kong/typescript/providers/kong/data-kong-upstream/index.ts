// https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/data-sources/upstream
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKongUpstreamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/data-sources/upstream#id DataKongUpstream#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/data-sources/upstream#name DataKongUpstream#name}
  */
  readonly name?: string;
}
export interface DataKongUpstreamHealthchecksActiveHealthy {
}

export function dataKongUpstreamHealthchecksActiveHealthyToTerraform(struct?: DataKongUpstreamHealthchecksActiveHealthy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKongUpstreamHealthchecksActiveHealthyToHclTerraform(struct?: DataKongUpstreamHealthchecksActiveHealthy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKongUpstreamHealthchecksActiveHealthyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKongUpstreamHealthchecksActiveHealthy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKongUpstreamHealthchecksActiveHealthy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // http_statuses - computed: true, optional: false, required: false
  public get httpStatuses() {
    return this.getNumberListAttribute('http_statuses');
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getNumberAttribute('interval');
  }

  // successes - computed: true, optional: false, required: false
  public get successes() {
    return this.getNumberAttribute('successes');
  }
}
export interface DataKongUpstreamHealthchecksActiveUnhealthy {
}

export function dataKongUpstreamHealthchecksActiveUnhealthyToTerraform(struct?: DataKongUpstreamHealthchecksActiveUnhealthy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKongUpstreamHealthchecksActiveUnhealthyToHclTerraform(struct?: DataKongUpstreamHealthchecksActiveUnhealthy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKongUpstreamHealthchecksActiveUnhealthyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKongUpstreamHealthchecksActiveUnhealthy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKongUpstreamHealthchecksActiveUnhealthy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // http_failures - computed: true, optional: false, required: false
  public get httpFailures() {
    return this.getNumberAttribute('http_failures');
  }

  // http_statuses - computed: true, optional: false, required: false
  public get httpStatuses() {
    return this.getNumberListAttribute('http_statuses');
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getNumberAttribute('interval');
  }

  // tcp_failures - computed: true, optional: false, required: false
  public get tcpFailures() {
    return this.getNumberAttribute('tcp_failures');
  }

  // timeouts - computed: true, optional: false, required: false
  public get timeouts() {
    return this.getNumberAttribute('timeouts');
  }
}
export interface DataKongUpstreamHealthchecksActive {
}

export function dataKongUpstreamHealthchecksActiveToTerraform(struct?: DataKongUpstreamHealthchecksActive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKongUpstreamHealthchecksActiveToHclTerraform(struct?: DataKongUpstreamHealthchecksActive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKongUpstreamHealthchecksActiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKongUpstreamHealthchecksActive | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKongUpstreamHealthchecksActive | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // concurrency - computed: true, optional: false, required: false
  public get concurrency() {
    return this.getNumberAttribute('concurrency');
  }

  // healthy - computed: true, optional: false, required: false
  private _healthy = new DataKongUpstreamHealthchecksActiveHealthyOutputReference(this, "healthy");
  public get healthy() {
    return this._healthy;
  }

  // http_path - computed: true, optional: false, required: false
  public get httpPath() {
    return this.getStringAttribute('http_path');
  }

  // https_sni - computed: true, optional: false, required: false
  public get httpsSni() {
    return this.getStringAttribute('https_sni');
  }

  // https_verify_certificate - computed: true, optional: false, required: false
  public get httpsVerifyCertificate() {
    return this.getBooleanAttribute('https_verify_certificate');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // unhealthy - computed: true, optional: false, required: false
  private _unhealthy = new DataKongUpstreamHealthchecksActiveUnhealthyOutputReference(this, "unhealthy");
  public get unhealthy() {
    return this._unhealthy;
  }
}
export interface DataKongUpstreamHealthchecksPassiveHealthy {
}

export function dataKongUpstreamHealthchecksPassiveHealthyToTerraform(struct?: DataKongUpstreamHealthchecksPassiveHealthy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKongUpstreamHealthchecksPassiveHealthyToHclTerraform(struct?: DataKongUpstreamHealthchecksPassiveHealthy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKongUpstreamHealthchecksPassiveHealthyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKongUpstreamHealthchecksPassiveHealthy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKongUpstreamHealthchecksPassiveHealthy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // http_statuses - computed: true, optional: false, required: false
  public get httpStatuses() {
    return this.getNumberListAttribute('http_statuses');
  }

  // successes - computed: true, optional: false, required: false
  public get successes() {
    return this.getNumberAttribute('successes');
  }
}
export interface DataKongUpstreamHealthchecksPassiveUnhealthy {
}

export function dataKongUpstreamHealthchecksPassiveUnhealthyToTerraform(struct?: DataKongUpstreamHealthchecksPassiveUnhealthy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKongUpstreamHealthchecksPassiveUnhealthyToHclTerraform(struct?: DataKongUpstreamHealthchecksPassiveUnhealthy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKongUpstreamHealthchecksPassiveUnhealthyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKongUpstreamHealthchecksPassiveUnhealthy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKongUpstreamHealthchecksPassiveUnhealthy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // http_failures - computed: true, optional: false, required: false
  public get httpFailures() {
    return this.getNumberAttribute('http_failures');
  }

  // http_statuses - computed: true, optional: false, required: false
  public get httpStatuses() {
    return this.getNumberListAttribute('http_statuses');
  }

  // tcp_failures - computed: true, optional: false, required: false
  public get tcpFailures() {
    return this.getNumberAttribute('tcp_failures');
  }

  // timeouts - computed: true, optional: false, required: false
  public get timeouts() {
    return this.getNumberAttribute('timeouts');
  }
}
export interface DataKongUpstreamHealthchecksPassive {
}

export function dataKongUpstreamHealthchecksPassiveToTerraform(struct?: DataKongUpstreamHealthchecksPassive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKongUpstreamHealthchecksPassiveToHclTerraform(struct?: DataKongUpstreamHealthchecksPassive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKongUpstreamHealthchecksPassiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKongUpstreamHealthchecksPassive | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKongUpstreamHealthchecksPassive | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // healthy - computed: true, optional: false, required: false
  private _healthy = new DataKongUpstreamHealthchecksPassiveHealthyOutputReference(this, "healthy");
  public get healthy() {
    return this._healthy;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // unhealthy - computed: true, optional: false, required: false
  private _unhealthy = new DataKongUpstreamHealthchecksPassiveUnhealthyOutputReference(this, "unhealthy");
  public get unhealthy() {
    return this._unhealthy;
  }
}
export interface DataKongUpstreamHealthchecks {
}

export function dataKongUpstreamHealthchecksToTerraform(struct?: DataKongUpstreamHealthchecks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKongUpstreamHealthchecksToHclTerraform(struct?: DataKongUpstreamHealthchecks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKongUpstreamHealthchecksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKongUpstreamHealthchecks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKongUpstreamHealthchecks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active - computed: true, optional: false, required: false
  private _active = new DataKongUpstreamHealthchecksActiveOutputReference(this, "active");
  public get active() {
    return this._active;
  }

  // passive - computed: true, optional: false, required: false
  private _passive = new DataKongUpstreamHealthchecksPassiveOutputReference(this, "passive");
  public get passive() {
    return this._passive;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/data-sources/upstream kong_upstream}
*/
export class DataKongUpstream extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kong_upstream";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataKongUpstream resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataKongUpstream to import
  * @param importFromId The id of the existing DataKongUpstream that should be imported. Refer to the {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/data-sources/upstream#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataKongUpstream to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kong_upstream", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/data-sources/upstream kong_upstream} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKongUpstreamConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataKongUpstreamConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'kong_upstream',
      terraformGeneratorMetadata: {
        providerName: 'kong',
        providerVersion: '8.1.0'
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

  // client_certificate_id - computed: true, optional: false, required: false
  public get clientCertificateId() {
    return this.getStringAttribute('client_certificate_id');
  }

  // hash_fallback - computed: true, optional: false, required: false
  public get hashFallback() {
    return this.getStringAttribute('hash_fallback');
  }

  // hash_fallback_header - computed: true, optional: false, required: false
  public get hashFallbackHeader() {
    return this.getStringAttribute('hash_fallback_header');
  }

  // hash_on - computed: true, optional: false, required: false
  public get hashOn() {
    return this.getStringAttribute('hash_on');
  }

  // hash_on_cookie - computed: true, optional: false, required: false
  public get hashOnCookie() {
    return this.getStringAttribute('hash_on_cookie');
  }

  // hash_on_cookie_path - computed: true, optional: false, required: false
  public get hashOnCookiePath() {
    return this.getStringAttribute('hash_on_cookie_path');
  }

  // hash_on_header - computed: true, optional: false, required: false
  public get hashOnHeader() {
    return this.getStringAttribute('hash_on_header');
  }

  // healthchecks - computed: true, optional: false, required: false
  private _healthchecks = new DataKongUpstreamHealthchecksOutputReference(this, "healthchecks");
  public get healthchecks() {
    return this._healthchecks;
  }

  // host_header - computed: true, optional: false, required: false
  public get hostHeader() {
    return this.getStringAttribute('host_header');
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // slots - computed: true, optional: false, required: false
  public get slots() {
    return this.getNumberAttribute('slots');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
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
