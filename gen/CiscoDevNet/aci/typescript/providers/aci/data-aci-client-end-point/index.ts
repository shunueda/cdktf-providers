// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/client_end_point
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciClientEndPointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/client_end_point#allow_empty_result DataAciClientEndPoint#allow_empty_result}
  */
  readonly allowEmptyResult?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/client_end_point#annotation DataAciClientEndPoint#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/client_end_point#description DataAciClientEndPoint#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/client_end_point#filter_dn DataAciClientEndPoint#filter_dn}
  */
  readonly filterDn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/client_end_point#id DataAciClientEndPoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/client_end_point#ip DataAciClientEndPoint#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/client_end_point#mac DataAciClientEndPoint#mac}
  */
  readonly mac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/client_end_point#name DataAciClientEndPoint#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/client_end_point#vlan DataAciClientEndPoint#vlan}
  */
  readonly vlan?: string;
  /**
  * fvcep_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/client_end_point#fvcep_objects DataAciClientEndPoint#fvcep_objects}
  */
  readonly fvcepObjects?: DataAciClientEndPointFvcepObjects[] | cdktf.IResolvable;
}
export interface DataAciClientEndPointFvcepObjects {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/client_end_point#application_profile_name DataAciClientEndPoint#application_profile_name}
  */
  readonly applicationProfileName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/client_end_point#base_epg DataAciClientEndPoint#base_epg}
  */
  readonly baseEpg?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/client_end_point#endpoint_path DataAciClientEndPoint#endpoint_path}
  */
  readonly endpointPath?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/client_end_point#epg_name DataAciClientEndPoint#epg_name}
  */
  readonly epgName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/client_end_point#esg_name DataAciClientEndPoint#esg_name}
  */
  readonly esgName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/client_end_point#instance_profile_name DataAciClientEndPoint#instance_profile_name}
  */
  readonly instanceProfileName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/client_end_point#ip DataAciClientEndPoint#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/client_end_point#ips DataAciClientEndPoint#ips}
  */
  readonly ips?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/client_end_point#l2out_name DataAciClientEndPoint#l2out_name}
  */
  readonly l2OutName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/client_end_point#mac DataAciClientEndPoint#mac}
  */
  readonly mac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/client_end_point#name DataAciClientEndPoint#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/client_end_point#tenant_name DataAciClientEndPoint#tenant_name}
  */
  readonly tenantName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/client_end_point#vlan DataAciClientEndPoint#vlan}
  */
  readonly vlan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/client_end_point#vrf_name DataAciClientEndPoint#vrf_name}
  */
  readonly vrfName?: string;
}

export function dataAciClientEndPointFvcepObjectsToTerraform(struct?: DataAciClientEndPointFvcepObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_profile_name: cdktf.stringToTerraform(struct!.applicationProfileName),
    base_epg: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.baseEpg),
    endpoint_path: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.endpointPath),
    epg_name: cdktf.stringToTerraform(struct!.epgName),
    esg_name: cdktf.stringToTerraform(struct!.esgName),
    instance_profile_name: cdktf.stringToTerraform(struct!.instanceProfileName),
    ip: cdktf.stringToTerraform(struct!.ip),
    ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ips),
    l2out_name: cdktf.stringToTerraform(struct!.l2OutName),
    mac: cdktf.stringToTerraform(struct!.mac),
    name: cdktf.stringToTerraform(struct!.name),
    tenant_name: cdktf.stringToTerraform(struct!.tenantName),
    vlan: cdktf.stringToTerraform(struct!.vlan),
    vrf_name: cdktf.stringToTerraform(struct!.vrfName),
  }
}


export function dataAciClientEndPointFvcepObjectsToHclTerraform(struct?: DataAciClientEndPointFvcepObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_profile_name: {
      value: cdktf.stringToHclTerraform(struct!.applicationProfileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    base_epg: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.baseEpg),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    endpoint_path: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.endpointPath),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    epg_name: {
      value: cdktf.stringToHclTerraform(struct!.epgName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    esg_name: {
      value: cdktf.stringToHclTerraform(struct!.esgName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_profile_name: {
      value: cdktf.stringToHclTerraform(struct!.instanceProfileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ips),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    l2out_name: {
      value: cdktf.stringToHclTerraform(struct!.l2OutName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac: {
      value: cdktf.stringToHclTerraform(struct!.mac),
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
    tenant_name: {
      value: cdktf.stringToHclTerraform(struct!.tenantName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan: {
      value: cdktf.stringToHclTerraform(struct!.vlan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrf_name: {
      value: cdktf.stringToHclTerraform(struct!.vrfName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAciClientEndPointFvcepObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciClientEndPointFvcepObjects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationProfileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationProfileName = this._applicationProfileName;
    }
    if (this._baseEpg !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseEpg = this._baseEpg;
    }
    if (this._endpointPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointPath = this._endpointPath;
    }
    if (this._epgName !== undefined) {
      hasAnyValues = true;
      internalValueResult.epgName = this._epgName;
    }
    if (this._esgName !== undefined) {
      hasAnyValues = true;
      internalValueResult.esgName = this._esgName;
    }
    if (this._instanceProfileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceProfileName = this._instanceProfileName;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ips !== undefined) {
      hasAnyValues = true;
      internalValueResult.ips = this._ips;
    }
    if (this._l2OutName !== undefined) {
      hasAnyValues = true;
      internalValueResult.l2OutName = this._l2OutName;
    }
    if (this._mac !== undefined) {
      hasAnyValues = true;
      internalValueResult.mac = this._mac;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tenantName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantName = this._tenantName;
    }
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    if (this._vrfName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrfName = this._vrfName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciClientEndPointFvcepObjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationProfileName = undefined;
      this._baseEpg = undefined;
      this._endpointPath = undefined;
      this._epgName = undefined;
      this._esgName = undefined;
      this._instanceProfileName = undefined;
      this._ip = undefined;
      this._ips = undefined;
      this._l2OutName = undefined;
      this._mac = undefined;
      this._name = undefined;
      this._tenantName = undefined;
      this._vlan = undefined;
      this._vrfName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationProfileName = value.applicationProfileName;
      this._baseEpg = value.baseEpg;
      this._endpointPath = value.endpointPath;
      this._epgName = value.epgName;
      this._esgName = value.esgName;
      this._instanceProfileName = value.instanceProfileName;
      this._ip = value.ip;
      this._ips = value.ips;
      this._l2OutName = value.l2OutName;
      this._mac = value.mac;
      this._name = value.name;
      this._tenantName = value.tenantName;
      this._vlan = value.vlan;
      this._vrfName = value.vrfName;
    }
  }

  // application_profile_name - computed: true, optional: true, required: false
  private _applicationProfileName?: string; 
  public get applicationProfileName() {
    return this.getStringAttribute('application_profile_name');
  }
  public set applicationProfileName(value: string) {
    this._applicationProfileName = value;
  }
  public resetApplicationProfileName() {
    this._applicationProfileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationProfileNameInput() {
    return this._applicationProfileName;
  }

  // base_epg - computed: false, optional: true, required: false
  private _baseEpg?: { [key: string]: string }; 
  public get baseEpg() {
    return this.getStringMapAttribute('base_epg');
  }
  public set baseEpg(value: { [key: string]: string }) {
    this._baseEpg = value;
  }
  public resetBaseEpg() {
    this._baseEpg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseEpgInput() {
    return this._baseEpg;
  }

  // endpoint_path - computed: true, optional: true, required: false
  private _endpointPath?: string[]; 
  public get endpointPath() {
    return this.getListAttribute('endpoint_path');
  }
  public set endpointPath(value: string[]) {
    this._endpointPath = value;
  }
  public resetEndpointPath() {
    this._endpointPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointPathInput() {
    return this._endpointPath;
  }

  // epg_name - computed: true, optional: true, required: false
  private _epgName?: string; 
  public get epgName() {
    return this.getStringAttribute('epg_name');
  }
  public set epgName(value: string) {
    this._epgName = value;
  }
  public resetEpgName() {
    this._epgName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epgNameInput() {
    return this._epgName;
  }

  // esg_name - computed: true, optional: true, required: false
  private _esgName?: string; 
  public get esgName() {
    return this.getStringAttribute('esg_name');
  }
  public set esgName(value: string) {
    this._esgName = value;
  }
  public resetEsgName() {
    this._esgName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esgNameInput() {
    return this._esgName;
  }

  // instance_profile_name - computed: true, optional: true, required: false
  private _instanceProfileName?: string; 
  public get instanceProfileName() {
    return this.getStringAttribute('instance_profile_name');
  }
  public set instanceProfileName(value: string) {
    this._instanceProfileName = value;
  }
  public resetInstanceProfileName() {
    this._instanceProfileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceProfileNameInput() {
    return this._instanceProfileName;
  }

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ips - computed: true, optional: true, required: false
  private _ips?: string[]; 
  public get ips() {
    return this.getListAttribute('ips');
  }
  public set ips(value: string[]) {
    this._ips = value;
  }
  public resetIps() {
    this._ips = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips;
  }

  // l2out_name - computed: true, optional: true, required: false
  private _l2OutName?: string; 
  public get l2OutName() {
    return this.getStringAttribute('l2out_name');
  }
  public set l2OutName(value: string) {
    this._l2OutName = value;
  }
  public resetL2OutName() {
    this._l2OutName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2OutNameInput() {
    return this._l2OutName;
  }

  // mac - computed: true, optional: true, required: false
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  public resetMac() {
    this._mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
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

  // tenant_name - computed: true, optional: true, required: false
  private _tenantName?: string; 
  public get tenantName() {
    return this.getStringAttribute('tenant_name');
  }
  public set tenantName(value: string) {
    this._tenantName = value;
  }
  public resetTenantName() {
    this._tenantName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantNameInput() {
    return this._tenantName;
  }

  // vlan - computed: true, optional: true, required: false
  private _vlan?: string; 
  public get vlan() {
    return this.getStringAttribute('vlan');
  }
  public set vlan(value: string) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // vrf_name - computed: true, optional: true, required: false
  private _vrfName?: string; 
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
  public set vrfName(value: string) {
    this._vrfName = value;
  }
  public resetVrfName() {
    this._vrfName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfNameInput() {
    return this._vrfName;
  }
}

export class DataAciClientEndPointFvcepObjectsList extends cdktf.ComplexList {
  public internalValue? : DataAciClientEndPointFvcepObjects[] | cdktf.IResolvable

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
  public get(index: number): DataAciClientEndPointFvcepObjectsOutputReference {
    return new DataAciClientEndPointFvcepObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/client_end_point aci_client_end_point}
*/
export class DataAciClientEndPoint extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_client_end_point";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciClientEndPoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciClientEndPoint to import
  * @param importFromId The id of the existing DataAciClientEndPoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/client_end_point#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciClientEndPoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_client_end_point", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/client_end_point aci_client_end_point} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciClientEndPointConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAciClientEndPointConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aci_client_end_point',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowEmptyResult = config.allowEmptyResult;
    this._annotation = config.annotation;
    this._description = config.description;
    this._filterDn = config.filterDn;
    this._id = config.id;
    this._ip = config.ip;
    this._mac = config.mac;
    this._name = config.name;
    this._vlan = config.vlan;
    this._fvcepObjects.internalValue = config.fvcepObjects;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_empty_result - computed: false, optional: true, required: false
  private _allowEmptyResult?: boolean | cdktf.IResolvable; 
  public get allowEmptyResult() {
    return this.getBooleanAttribute('allow_empty_result');
  }
  public set allowEmptyResult(value: boolean | cdktf.IResolvable) {
    this._allowEmptyResult = value;
  }
  public resetAllowEmptyResult() {
    this._allowEmptyResult = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowEmptyResultInput() {
    return this._allowEmptyResult;
  }

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // description - computed: true, optional: true, required: false
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

  // filter_dn - computed: true, optional: true, required: false
  private _filterDn?: string; 
  public get filterDn() {
    return this.getStringAttribute('filter_dn');
  }
  public set filterDn(value: string) {
    this._filterDn = value;
  }
  public resetFilterDn() {
    this._filterDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterDnInput() {
    return this._filterDn;
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

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // mac - computed: true, optional: true, required: false
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  public resetMac() {
    this._mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
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

  // vlan - computed: true, optional: true, required: false
  private _vlan?: string; 
  public get vlan() {
    return this.getStringAttribute('vlan');
  }
  public set vlan(value: string) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // fvcep_objects - computed: false, optional: true, required: false
  private _fvcepObjects = new DataAciClientEndPointFvcepObjectsList(this, "fvcep_objects", false);
  public get fvcepObjects() {
    return this._fvcepObjects;
  }
  public putFvcepObjects(value: DataAciClientEndPointFvcepObjects[] | cdktf.IResolvable) {
    this._fvcepObjects.internalValue = value;
  }
  public resetFvcepObjects() {
    this._fvcepObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fvcepObjectsInput() {
    return this._fvcepObjects.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_empty_result: cdktf.booleanToTerraform(this._allowEmptyResult),
      annotation: cdktf.stringToTerraform(this._annotation),
      description: cdktf.stringToTerraform(this._description),
      filter_dn: cdktf.stringToTerraform(this._filterDn),
      id: cdktf.stringToTerraform(this._id),
      ip: cdktf.stringToTerraform(this._ip),
      mac: cdktf.stringToTerraform(this._mac),
      name: cdktf.stringToTerraform(this._name),
      vlan: cdktf.stringToTerraform(this._vlan),
      fvcep_objects: cdktf.listMapper(dataAciClientEndPointFvcepObjectsToTerraform, true)(this._fvcepObjects.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_empty_result: {
        value: cdktf.booleanToHclTerraform(this._allowEmptyResult),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
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
      filter_dn: {
        value: cdktf.stringToHclTerraform(this._filterDn),
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
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac: {
        value: cdktf.stringToHclTerraform(this._mac),
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
      vlan: {
        value: cdktf.stringToHclTerraform(this._vlan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fvcep_objects: {
        value: cdktf.listMapperHcl(dataAciClientEndPointFvcepObjectsToHclTerraform, true)(this._fvcepObjects.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAciClientEndPointFvcepObjectsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
