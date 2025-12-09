// https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_vrf_region
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SchemaSiteVrfRegionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_vrf_region#hub_network SchemaSiteVrfRegion#hub_network}
  */
  readonly hubNetwork?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_vrf_region#hub_network_enable SchemaSiteVrfRegion#hub_network_enable}
  */
  readonly hubNetworkEnable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_vrf_region#id SchemaSiteVrfRegion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_vrf_region#region_name SchemaSiteVrfRegion#region_name}
  */
  readonly regionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_vrf_region#schema_id SchemaSiteVrfRegion#schema_id}
  */
  readonly schemaId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_vrf_region#site_id SchemaSiteVrfRegion#site_id}
  */
  readonly siteId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_vrf_region#template_name SchemaSiteVrfRegion#template_name}
  */
  readonly templateName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_vrf_region#vpn_gateway SchemaSiteVrfRegion#vpn_gateway}
  */
  readonly vpnGateway?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_vrf_region#vrf_name SchemaSiteVrfRegion#vrf_name}
  */
  readonly vrfName: string;
  /**
  * cidr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_vrf_region#cidr SchemaSiteVrfRegion#cidr}
  */
  readonly cidr?: SchemaSiteVrfRegionCidr[] | cdktf.IResolvable;
}
export interface SchemaSiteVrfRegionCidrSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_vrf_region#ip SchemaSiteVrfRegion#ip}
  */
  readonly ip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_vrf_region#name SchemaSiteVrfRegion#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_vrf_region#subnet_group SchemaSiteVrfRegion#subnet_group}
  */
  readonly subnetGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_vrf_region#usage SchemaSiteVrfRegion#usage}
  */
  readonly usage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_vrf_region#zone SchemaSiteVrfRegion#zone}
  */
  readonly zone?: string;
}

export function schemaSiteVrfRegionCidrSubnetToTerraform(struct?: SchemaSiteVrfRegionCidrSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    name: cdktf.stringToTerraform(struct!.name),
    subnet_group: cdktf.stringToTerraform(struct!.subnetGroup),
    usage: cdktf.stringToTerraform(struct!.usage),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function schemaSiteVrfRegionCidrSubnetToHclTerraform(struct?: SchemaSiteVrfRegionCidrSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
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
    subnet_group: {
      value: cdktf.stringToHclTerraform(struct!.subnetGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usage: {
      value: cdktf.stringToHclTerraform(struct!.usage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SchemaSiteVrfRegionCidrSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SchemaSiteVrfRegionCidrSubnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._subnetGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetGroup = this._subnetGroup;
    }
    if (this._usage !== undefined) {
      hasAnyValues = true;
      internalValueResult.usage = this._usage;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchemaSiteVrfRegionCidrSubnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
      this._name = undefined;
      this._subnetGroup = undefined;
      this._usage = undefined;
      this._zone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
      this._name = value.name;
      this._subnetGroup = value.subnetGroup;
      this._usage = value.usage;
      this._zone = value.zone;
    }
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
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

  // subnet_group - computed: true, optional: true, required: false
  private _subnetGroup?: string; 
  public get subnetGroup() {
    return this.getStringAttribute('subnet_group');
  }
  public set subnetGroup(value: string) {
    this._subnetGroup = value;
  }
  public resetSubnetGroup() {
    this._subnetGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetGroupInput() {
    return this._subnetGroup;
  }

  // usage - computed: true, optional: true, required: false
  private _usage?: string; 
  public get usage() {
    return this.getStringAttribute('usage');
  }
  public set usage(value: string) {
    this._usage = value;
  }
  public resetUsage() {
    this._usage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageInput() {
    return this._usage;
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}

export class SchemaSiteVrfRegionCidrSubnetList extends cdktf.ComplexList {
  public internalValue? : SchemaSiteVrfRegionCidrSubnet[] | cdktf.IResolvable

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
  public get(index: number): SchemaSiteVrfRegionCidrSubnetOutputReference {
    return new SchemaSiteVrfRegionCidrSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SchemaSiteVrfRegionCidr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_vrf_region#cidr_ip SchemaSiteVrfRegion#cidr_ip}
  */
  readonly cidrIp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_vrf_region#primary SchemaSiteVrfRegion#primary}
  */
  readonly primary: boolean | cdktf.IResolvable;
  /**
  * subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_vrf_region#subnet SchemaSiteVrfRegion#subnet}
  */
  readonly subnet: SchemaSiteVrfRegionCidrSubnet[] | cdktf.IResolvable;
}

export function schemaSiteVrfRegionCidrToTerraform(struct?: SchemaSiteVrfRegionCidr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_ip: cdktf.stringToTerraform(struct!.cidrIp),
    primary: cdktf.booleanToTerraform(struct!.primary),
    subnet: cdktf.listMapper(schemaSiteVrfRegionCidrSubnetToTerraform, true)(struct!.subnet),
  }
}


export function schemaSiteVrfRegionCidrToHclTerraform(struct?: SchemaSiteVrfRegionCidr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr_ip: {
      value: cdktf.stringToHclTerraform(struct!.cidrIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary: {
      value: cdktf.booleanToHclTerraform(struct!.primary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subnet: {
      value: cdktf.listMapperHcl(schemaSiteVrfRegionCidrSubnetToHclTerraform, true)(struct!.subnet),
      isBlock: true,
      type: "list",
      storageClassType: "SchemaSiteVrfRegionCidrSubnetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SchemaSiteVrfRegionCidrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SchemaSiteVrfRegionCidr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrIp = this._cidrIp;
    }
    if (this._primary !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary;
    }
    if (this._subnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchemaSiteVrfRegionCidr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrIp = undefined;
      this._primary = undefined;
      this._subnet.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrIp = value.cidrIp;
      this._primary = value.primary;
      this._subnet.internalValue = value.subnet;
    }
  }

  // cidr_ip - computed: false, optional: false, required: true
  private _cidrIp?: string; 
  public get cidrIp() {
    return this.getStringAttribute('cidr_ip');
  }
  public set cidrIp(value: string) {
    this._cidrIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrIpInput() {
    return this._cidrIp;
  }

  // primary - computed: false, optional: false, required: true
  private _primary?: boolean | cdktf.IResolvable; 
  public get primary() {
    return this.getBooleanAttribute('primary');
  }
  public set primary(value: boolean | cdktf.IResolvable) {
    this._primary = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }

  // subnet - computed: false, optional: false, required: true
  private _subnet = new SchemaSiteVrfRegionCidrSubnetList(this, "subnet", false);
  public get subnet() {
    return this._subnet;
  }
  public putSubnet(value: SchemaSiteVrfRegionCidrSubnet[] | cdktf.IResolvable) {
    this._subnet.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet.internalValue;
  }
}

export class SchemaSiteVrfRegionCidrList extends cdktf.ComplexList {
  public internalValue? : SchemaSiteVrfRegionCidr[] | cdktf.IResolvable

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
  public get(index: number): SchemaSiteVrfRegionCidrOutputReference {
    return new SchemaSiteVrfRegionCidrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_vrf_region mso_schema_site_vrf_region}
*/
export class SchemaSiteVrfRegion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mso_schema_site_vrf_region";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SchemaSiteVrfRegion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SchemaSiteVrfRegion to import
  * @param importFromId The id of the existing SchemaSiteVrfRegion that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_vrf_region#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SchemaSiteVrfRegion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mso_schema_site_vrf_region", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_vrf_region mso_schema_site_vrf_region} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SchemaSiteVrfRegionConfig
  */
  public constructor(scope: Construct, id: string, config: SchemaSiteVrfRegionConfig) {
    super(scope, id, {
      terraformResourceType: 'mso_schema_site_vrf_region',
      terraformGeneratorMetadata: {
        providerName: 'mso',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._hubNetwork = config.hubNetwork;
    this._hubNetworkEnable = config.hubNetworkEnable;
    this._id = config.id;
    this._regionName = config.regionName;
    this._schemaId = config.schemaId;
    this._siteId = config.siteId;
    this._templateName = config.templateName;
    this._vpnGateway = config.vpnGateway;
    this._vrfName = config.vrfName;
    this._cidr.internalValue = config.cidr;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // hub_network - computed: true, optional: true, required: false
  private _hubNetwork?: { [key: string]: string }; 
  public get hubNetwork() {
    return this.getStringMapAttribute('hub_network');
  }
  public set hubNetwork(value: { [key: string]: string }) {
    this._hubNetwork = value;
  }
  public resetHubNetwork() {
    this._hubNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hubNetworkInput() {
    return this._hubNetwork;
  }

  // hub_network_enable - computed: true, optional: true, required: false
  private _hubNetworkEnable?: boolean | cdktf.IResolvable; 
  public get hubNetworkEnable() {
    return this.getBooleanAttribute('hub_network_enable');
  }
  public set hubNetworkEnable(value: boolean | cdktf.IResolvable) {
    this._hubNetworkEnable = value;
  }
  public resetHubNetworkEnable() {
    this._hubNetworkEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hubNetworkEnableInput() {
    return this._hubNetworkEnable;
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

  // region_name - computed: false, optional: false, required: true
  private _regionName?: string; 
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
  public set regionName(value: string) {
    this._regionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNameInput() {
    return this._regionName;
  }

  // schema_id - computed: false, optional: false, required: true
  private _schemaId?: string; 
  public get schemaId() {
    return this.getStringAttribute('schema_id');
  }
  public set schemaId(value: string) {
    this._schemaId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaIdInput() {
    return this._schemaId;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // vpn_gateway - computed: true, optional: true, required: false
  private _vpnGateway?: boolean | cdktf.IResolvable; 
  public get vpnGateway() {
    return this.getBooleanAttribute('vpn_gateway');
  }
  public set vpnGateway(value: boolean | cdktf.IResolvable) {
    this._vpnGateway = value;
  }
  public resetVpnGateway() {
    this._vpnGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnGatewayInput() {
    return this._vpnGateway;
  }

  // vrf_name - computed: false, optional: false, required: true
  private _vrfName?: string; 
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
  public set vrfName(value: string) {
    this._vrfName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfNameInput() {
    return this._vrfName;
  }

  // cidr - computed: false, optional: true, required: false
  private _cidr = new SchemaSiteVrfRegionCidrList(this, "cidr", false);
  public get cidr() {
    return this._cidr;
  }
  public putCidr(value: SchemaSiteVrfRegionCidr[] | cdktf.IResolvable) {
    this._cidr.internalValue = value;
  }
  public resetCidr() {
    this._cidr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      hub_network: cdktf.hashMapper(cdktf.stringToTerraform)(this._hubNetwork),
      hub_network_enable: cdktf.booleanToTerraform(this._hubNetworkEnable),
      id: cdktf.stringToTerraform(this._id),
      region_name: cdktf.stringToTerraform(this._regionName),
      schema_id: cdktf.stringToTerraform(this._schemaId),
      site_id: cdktf.stringToTerraform(this._siteId),
      template_name: cdktf.stringToTerraform(this._templateName),
      vpn_gateway: cdktf.booleanToTerraform(this._vpnGateway),
      vrf_name: cdktf.stringToTerraform(this._vrfName),
      cidr: cdktf.listMapper(schemaSiteVrfRegionCidrToTerraform, true)(this._cidr.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      hub_network: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._hubNetwork),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      hub_network_enable: {
        value: cdktf.booleanToHclTerraform(this._hubNetworkEnable),
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
      region_name: {
        value: cdktf.stringToHclTerraform(this._regionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema_id: {
        value: cdktf.stringToHclTerraform(this._schemaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_name: {
        value: cdktf.stringToHclTerraform(this._templateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_gateway: {
        value: cdktf.booleanToHclTerraform(this._vpnGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vrf_name: {
        value: cdktf.stringToHclTerraform(this._vrfName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cidr: {
        value: cdktf.listMapperHcl(schemaSiteVrfRegionCidrToHclTerraform, true)(this._cidr.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SchemaSiteVrfRegionCidrList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
