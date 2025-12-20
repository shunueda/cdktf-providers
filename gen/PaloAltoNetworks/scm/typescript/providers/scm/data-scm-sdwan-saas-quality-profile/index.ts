// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/sdwan_saas_quality_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataScmSdwanSaasQualityProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The device in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/sdwan_saas_quality_profile#device DataScmSdwanSaasQualityProfile#device}
  */
  readonly device?: string;
  /**
  * The folder in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/sdwan_saas_quality_profile#folder DataScmSdwanSaasQualityProfile#folder}
  */
  readonly folder?: string;
  /**
  * UUID of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/sdwan_saas_quality_profile#id DataScmSdwanSaasQualityProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/sdwan_saas_quality_profile#name DataScmSdwanSaasQualityProfile#name}
  */
  readonly name?: string;
  /**
  * The snippet in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/sdwan_saas_quality_profile#snippet DataScmSdwanSaasQualityProfile#snippet}
  */
  readonly snippet?: string;
}
export interface DataScmSdwanSaasQualityProfileMonitorModeAdaptive {
}

export function dataScmSdwanSaasQualityProfileMonitorModeAdaptiveToTerraform(struct?: DataScmSdwanSaasQualityProfileMonitorModeAdaptive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmSdwanSaasQualityProfileMonitorModeAdaptiveToHclTerraform(struct?: DataScmSdwanSaasQualityProfileMonitorModeAdaptive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmSdwanSaasQualityProfileMonitorModeAdaptiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmSdwanSaasQualityProfileMonitorModeAdaptive | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmSdwanSaasQualityProfileMonitorModeAdaptive | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmSdwanSaasQualityProfileMonitorModeHttpHttps {
}

export function dataScmSdwanSaasQualityProfileMonitorModeHttpHttpsToTerraform(struct?: DataScmSdwanSaasQualityProfileMonitorModeHttpHttps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmSdwanSaasQualityProfileMonitorModeHttpHttpsToHclTerraform(struct?: DataScmSdwanSaasQualityProfileMonitorModeHttpHttps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmSdwanSaasQualityProfileMonitorModeHttpHttpsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmSdwanSaasQualityProfileMonitorModeHttpHttps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmSdwanSaasQualityProfileMonitorModeHttpHttps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // monitored_url - computed: true, optional: false, required: false
  public get monitoredUrl() {
    return this.getStringAttribute('monitored_url');
  }

  // probe_interval - computed: true, optional: false, required: false
  public get probeInterval() {
    return this.getNumberAttribute('probe_interval');
  }
}
export interface DataScmSdwanSaasQualityProfileMonitorModeStaticIpFqdn {
}

export function dataScmSdwanSaasQualityProfileMonitorModeStaticIpFqdnToTerraform(struct?: DataScmSdwanSaasQualityProfileMonitorModeStaticIpFqdn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmSdwanSaasQualityProfileMonitorModeStaticIpFqdnToHclTerraform(struct?: DataScmSdwanSaasQualityProfileMonitorModeStaticIpFqdn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmSdwanSaasQualityProfileMonitorModeStaticIpFqdnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmSdwanSaasQualityProfileMonitorModeStaticIpFqdn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmSdwanSaasQualityProfileMonitorModeStaticIpFqdn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fqdn_name - computed: true, optional: false, required: false
  public get fqdnName() {
    return this.getStringAttribute('fqdn_name');
  }

  // probe_interval - computed: true, optional: false, required: false
  public get probeInterval() {
    return this.getNumberAttribute('probe_interval');
  }
}
export interface DataScmSdwanSaasQualityProfileMonitorModeStaticIpIpAddress {
}

export function dataScmSdwanSaasQualityProfileMonitorModeStaticIpIpAddressToTerraform(struct?: DataScmSdwanSaasQualityProfileMonitorModeStaticIpIpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmSdwanSaasQualityProfileMonitorModeStaticIpIpAddressToHclTerraform(struct?: DataScmSdwanSaasQualityProfileMonitorModeStaticIpIpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmSdwanSaasQualityProfileMonitorModeStaticIpIpAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmSdwanSaasQualityProfileMonitorModeStaticIpIpAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmSdwanSaasQualityProfileMonitorModeStaticIpIpAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // probe_interval - computed: true, optional: false, required: false
  public get probeInterval() {
    return this.getNumberAttribute('probe_interval');
  }
}

export class DataScmSdwanSaasQualityProfileMonitorModeStaticIpIpAddressList extends cdktf.ComplexList {

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
  public get(index: number): DataScmSdwanSaasQualityProfileMonitorModeStaticIpIpAddressOutputReference {
    return new DataScmSdwanSaasQualityProfileMonitorModeStaticIpIpAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmSdwanSaasQualityProfileMonitorModeStaticIp {
}

export function dataScmSdwanSaasQualityProfileMonitorModeStaticIpToTerraform(struct?: DataScmSdwanSaasQualityProfileMonitorModeStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmSdwanSaasQualityProfileMonitorModeStaticIpToHclTerraform(struct?: DataScmSdwanSaasQualityProfileMonitorModeStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmSdwanSaasQualityProfileMonitorModeStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmSdwanSaasQualityProfileMonitorModeStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmSdwanSaasQualityProfileMonitorModeStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fqdn - computed: true, optional: false, required: false
  private _fqdn = new DataScmSdwanSaasQualityProfileMonitorModeStaticIpFqdnOutputReference(this, "fqdn");
  public get fqdn() {
    return this._fqdn;
  }

  // ip_address - computed: true, optional: false, required: false
  private _ipAddress = new DataScmSdwanSaasQualityProfileMonitorModeStaticIpIpAddressList(this, "ip_address", false);
  public get ipAddress() {
    return this._ipAddress;
  }
}
export interface DataScmSdwanSaasQualityProfileMonitorMode {
}

export function dataScmSdwanSaasQualityProfileMonitorModeToTerraform(struct?: DataScmSdwanSaasQualityProfileMonitorMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmSdwanSaasQualityProfileMonitorModeToHclTerraform(struct?: DataScmSdwanSaasQualityProfileMonitorMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmSdwanSaasQualityProfileMonitorModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmSdwanSaasQualityProfileMonitorMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmSdwanSaasQualityProfileMonitorMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // adaptive - computed: true, optional: false, required: false
  private _adaptive = new DataScmSdwanSaasQualityProfileMonitorModeAdaptiveOutputReference(this, "adaptive");
  public get adaptive() {
    return this._adaptive;
  }

  // http_https - computed: true, optional: false, required: false
  private _httpHttps = new DataScmSdwanSaasQualityProfileMonitorModeHttpHttpsOutputReference(this, "http_https");
  public get httpHttps() {
    return this._httpHttps;
  }

  // static_ip - computed: true, optional: false, required: false
  private _staticIp = new DataScmSdwanSaasQualityProfileMonitorModeStaticIpOutputReference(this, "static_ip");
  public get staticIp() {
    return this._staticIp;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/sdwan_saas_quality_profile scm_sdwan_saas_quality_profile}
*/
export class DataScmSdwanSaasQualityProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_sdwan_saas_quality_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataScmSdwanSaasQualityProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataScmSdwanSaasQualityProfile to import
  * @param importFromId The id of the existing DataScmSdwanSaasQualityProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/sdwan_saas_quality_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataScmSdwanSaasQualityProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_sdwan_saas_quality_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/sdwan_saas_quality_profile scm_sdwan_saas_quality_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataScmSdwanSaasQualityProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataScmSdwanSaasQualityProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_sdwan_saas_quality_profile',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.6',
        providerVersionConstraint: '1.0.6'
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
    this._id = config.id;
    this._name = config.name;
    this._snippet = config.snippet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device - computed: true, optional: true, required: false
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

  // folder - computed: true, optional: true, required: false
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

  // monitor_mode - computed: true, optional: false, required: false
  private _monitorMode = new DataScmSdwanSaasQualityProfileMonitorModeOutputReference(this, "monitor_mode");
  public get monitorMode() {
    return this._monitorMode;
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

  // snippet - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
