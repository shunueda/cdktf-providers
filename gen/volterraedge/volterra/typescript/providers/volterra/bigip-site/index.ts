// https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bigip_site
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BigipSiteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bigip_site#annotations BigipSite#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bigip_site#certified_hw BigipSite#certified_hw}
  */
  readonly certifiedHw: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bigip_site#description BigipSite#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bigip_site#disable BigipSite#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bigip_site#id BigipSite#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bigip_site#labels BigipSite#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bigip_site#logs_streaming_disabled BigipSite#logs_streaming_disabled}
  */
  readonly logsStreamingDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bigip_site#name BigipSite#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bigip_site#namespace BigipSite#namespace}
  */
  readonly namespace: string;
  /**
  * coordinates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bigip_site#coordinates BigipSite#coordinates}
  */
  readonly coordinates?: BigipSiteCoordinates;
  /**
  * log_receiver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bigip_site#log_receiver BigipSite#log_receiver}
  */
  readonly logReceiver?: BigipSiteLogReceiver;
  /**
  * master_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bigip_site#master_nodes BigipSite#master_nodes}
  */
  readonly masterNodes: BigipSiteMasterNodes[] | cdktf.IResolvable;
  /**
  * sw block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bigip_site#sw BigipSite#sw}
  */
  readonly sw?: BigipSiteSw;
}
export interface BigipSiteCoordinates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bigip_site#latitude BigipSite#latitude}
  */
  readonly latitude?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bigip_site#longitude BigipSite#longitude}
  */
  readonly longitude?: number;
}

export function bigipSiteCoordinatesToTerraform(struct?: BigipSiteCoordinatesOutputReference | BigipSiteCoordinates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    latitude: cdktf.numberToTerraform(struct!.latitude),
    longitude: cdktf.numberToTerraform(struct!.longitude),
  }
}


export function bigipSiteCoordinatesToHclTerraform(struct?: BigipSiteCoordinatesOutputReference | BigipSiteCoordinates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    latitude: {
      value: cdktf.numberToHclTerraform(struct!.latitude),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    longitude: {
      value: cdktf.numberToHclTerraform(struct!.longitude),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigipSiteCoordinatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigipSiteCoordinates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._latitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.latitude = this._latitude;
    }
    if (this._longitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.longitude = this._longitude;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigipSiteCoordinates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._latitude = undefined;
      this._longitude = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._latitude = value.latitude;
      this._longitude = value.longitude;
    }
  }

  // latitude - computed: false, optional: true, required: false
  private _latitude?: number; 
  public get latitude() {
    return this.getNumberAttribute('latitude');
  }
  public set latitude(value: number) {
    this._latitude = value;
  }
  public resetLatitude() {
    this._latitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latitudeInput() {
    return this._latitude;
  }

  // longitude - computed: false, optional: true, required: false
  private _longitude?: number; 
  public get longitude() {
    return this.getNumberAttribute('longitude');
  }
  public set longitude(value: number) {
    this._longitude = value;
  }
  public resetLongitude() {
    this._longitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longitudeInput() {
    return this._longitude;
  }
}
export interface BigipSiteLogReceiver {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bigip_site#name BigipSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bigip_site#namespace BigipSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bigip_site#tenant BigipSite#tenant}
  */
  readonly tenant?: string;
}

export function bigipSiteLogReceiverToTerraform(struct?: BigipSiteLogReceiverOutputReference | BigipSiteLogReceiver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function bigipSiteLogReceiverToHclTerraform(struct?: BigipSiteLogReceiverOutputReference | BigipSiteLogReceiver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigipSiteLogReceiverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigipSiteLogReceiver | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigipSiteLogReceiver | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface BigipSiteMasterNodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bigip_site#name BigipSite#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bigip_site#public_ip BigipSite#public_ip}
  */
  readonly publicIp?: string;
}

export function bigipSiteMasterNodesToTerraform(struct?: BigipSiteMasterNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    public_ip: cdktf.stringToTerraform(struct!.publicIp),
  }
}


export function bigipSiteMasterNodesToHclTerraform(struct?: BigipSiteMasterNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_ip: {
      value: cdktf.stringToHclTerraform(struct!.publicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigipSiteMasterNodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): BigipSiteMasterNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._publicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIp = this._publicIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigipSiteMasterNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._publicIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._publicIp = value.publicIp;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // public_ip - computed: false, optional: true, required: false
  private _publicIp?: string; 
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }
  public set publicIp(value: string) {
    this._publicIp = value;
  }
  public resetPublicIp() {
    this._publicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpInput() {
    return this._publicIp;
  }
}

export class BigipSiteMasterNodesList extends cdktf.ComplexList {
  public internalValue? : BigipSiteMasterNodes[] | cdktf.IResolvable

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
  public get(index: number): BigipSiteMasterNodesOutputReference {
    return new BigipSiteMasterNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BigipSiteSw {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bigip_site#default_sw_version BigipSite#default_sw_version}
  */
  readonly defaultSwVersion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bigip_site#volterra_software_version BigipSite#volterra_software_version}
  */
  readonly volterraSoftwareVersion?: string;
}

export function bigipSiteSwToTerraform(struct?: BigipSiteSwOutputReference | BigipSiteSw): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_sw_version: cdktf.booleanToTerraform(struct!.defaultSwVersion),
    volterra_software_version: cdktf.stringToTerraform(struct!.volterraSoftwareVersion),
  }
}


export function bigipSiteSwToHclTerraform(struct?: BigipSiteSwOutputReference | BigipSiteSw): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_sw_version: {
      value: cdktf.booleanToHclTerraform(struct!.defaultSwVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    volterra_software_version: {
      value: cdktf.stringToHclTerraform(struct!.volterraSoftwareVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigipSiteSwOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigipSiteSw | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultSwVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSwVersion = this._defaultSwVersion;
    }
    if (this._volterraSoftwareVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.volterraSoftwareVersion = this._volterraSoftwareVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigipSiteSw | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultSwVersion = undefined;
      this._volterraSoftwareVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultSwVersion = value.defaultSwVersion;
      this._volterraSoftwareVersion = value.volterraSoftwareVersion;
    }
  }

  // default_sw_version - computed: false, optional: true, required: false
  private _defaultSwVersion?: boolean | cdktf.IResolvable; 
  public get defaultSwVersion() {
    return this.getBooleanAttribute('default_sw_version');
  }
  public set defaultSwVersion(value: boolean | cdktf.IResolvable) {
    this._defaultSwVersion = value;
  }
  public resetDefaultSwVersion() {
    this._defaultSwVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSwVersionInput() {
    return this._defaultSwVersion;
  }

  // volterra_software_version - computed: false, optional: true, required: false
  private _volterraSoftwareVersion?: string; 
  public get volterraSoftwareVersion() {
    return this.getStringAttribute('volterra_software_version');
  }
  public set volterraSoftwareVersion(value: string) {
    this._volterraSoftwareVersion = value;
  }
  public resetVolterraSoftwareVersion() {
    this._volterraSoftwareVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volterraSoftwareVersionInput() {
    return this._volterraSoftwareVersion;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bigip_site volterra_bigip_site}
*/
export class BigipSite extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_bigip_site";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BigipSite resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BigipSite to import
  * @param importFromId The id of the existing BigipSite that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bigip_site#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BigipSite to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_bigip_site", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bigip_site volterra_bigip_site} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BigipSiteConfig
  */
  public constructor(scope: Construct, id: string, config: BigipSiteConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_bigip_site',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.46',
        providerVersionConstraint: '0.11.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._certifiedHw = config.certifiedHw;
    this._description = config.description;
    this._disable = config.disable;
    this._id = config.id;
    this._labels = config.labels;
    this._logsStreamingDisabled = config.logsStreamingDisabled;
    this._name = config.name;
    this._namespace = config.namespace;
    this._coordinates.internalValue = config.coordinates;
    this._logReceiver.internalValue = config.logReceiver;
    this._masterNodes.internalValue = config.masterNodes;
    this._sw.internalValue = config.sw;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // certified_hw - computed: false, optional: false, required: true
  private _certifiedHw?: string; 
  public get certifiedHw() {
    return this.getStringAttribute('certified_hw');
  }
  public set certifiedHw(value: string) {
    this._certifiedHw = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certifiedHwInput() {
    return this._certifiedHw;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // id - computed: true, optional: true, required: false
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // logs_streaming_disabled - computed: false, optional: true, required: false
  private _logsStreamingDisabled?: boolean | cdktf.IResolvable; 
  public get logsStreamingDisabled() {
    return this.getBooleanAttribute('logs_streaming_disabled');
  }
  public set logsStreamingDisabled(value: boolean | cdktf.IResolvable) {
    this._logsStreamingDisabled = value;
  }
  public resetLogsStreamingDisabled() {
    this._logsStreamingDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsStreamingDisabledInput() {
    return this._logsStreamingDisabled;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // coordinates - computed: false, optional: true, required: false
  private _coordinates = new BigipSiteCoordinatesOutputReference(this, "coordinates");
  public get coordinates() {
    return this._coordinates;
  }
  public putCoordinates(value: BigipSiteCoordinates) {
    this._coordinates.internalValue = value;
  }
  public resetCoordinates() {
    this._coordinates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coordinatesInput() {
    return this._coordinates.internalValue;
  }

  // log_receiver - computed: false, optional: true, required: false
  private _logReceiver = new BigipSiteLogReceiverOutputReference(this, "log_receiver");
  public get logReceiver() {
    return this._logReceiver;
  }
  public putLogReceiver(value: BigipSiteLogReceiver) {
    this._logReceiver.internalValue = value;
  }
  public resetLogReceiver() {
    this._logReceiver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logReceiverInput() {
    return this._logReceiver.internalValue;
  }

  // master_nodes - computed: false, optional: false, required: true
  private _masterNodes = new BigipSiteMasterNodesList(this, "master_nodes", false);
  public get masterNodes() {
    return this._masterNodes;
  }
  public putMasterNodes(value: BigipSiteMasterNodes[] | cdktf.IResolvable) {
    this._masterNodes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterNodesInput() {
    return this._masterNodes.internalValue;
  }

  // sw - computed: false, optional: true, required: false
  private _sw = new BigipSiteSwOutputReference(this, "sw");
  public get sw() {
    return this._sw;
  }
  public putSw(value: BigipSiteSw) {
    this._sw.internalValue = value;
  }
  public resetSw() {
    this._sw.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swInput() {
    return this._sw.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      certified_hw: cdktf.stringToTerraform(this._certifiedHw),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      logs_streaming_disabled: cdktf.booleanToTerraform(this._logsStreamingDisabled),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      coordinates: bigipSiteCoordinatesToTerraform(this._coordinates.internalValue),
      log_receiver: bigipSiteLogReceiverToTerraform(this._logReceiver.internalValue),
      master_nodes: cdktf.listMapper(bigipSiteMasterNodesToTerraform, true)(this._masterNodes.internalValue),
      sw: bigipSiteSwToTerraform(this._sw.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      certified_hw: {
        value: cdktf.stringToHclTerraform(this._certifiedHw),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      logs_streaming_disabled: {
        value: cdktf.booleanToHclTerraform(this._logsStreamingDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      coordinates: {
        value: bigipSiteCoordinatesToHclTerraform(this._coordinates.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BigipSiteCoordinatesList",
      },
      log_receiver: {
        value: bigipSiteLogReceiverToHclTerraform(this._logReceiver.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BigipSiteLogReceiverList",
      },
      master_nodes: {
        value: cdktf.listMapperHcl(bigipSiteMasterNodesToHclTerraform, true)(this._masterNodes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BigipSiteMasterNodesList",
      },
      sw: {
        value: bigipSiteSwToHclTerraform(this._sw.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BigipSiteSwList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
