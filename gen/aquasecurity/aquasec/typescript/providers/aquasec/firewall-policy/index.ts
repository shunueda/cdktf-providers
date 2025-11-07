// https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/firewall_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates whether policy includes blocking incoming 'ping' requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/firewall_policy#block_icmp_ping FirewallPolicy#block_icmp_ping}
  */
  readonly blockIcmpPing?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether policy includes blocking metadata services of the cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/firewall_policy#block_metadata_service FirewallPolicy#block_metadata_service}
  */
  readonly blockMetadataService?: boolean | cdktf.IResolvable;
  /**
  * Description of the Firewall Policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/firewall_policy#description FirewallPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/firewall_policy#id FirewallPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the policy, no longer than 128 characters and no slash characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/firewall_policy#name FirewallPolicy#name}
  */
  readonly name: string;
  /**
  * Indicates the class of protection defined by the firewall.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/firewall_policy#type FirewallPolicy#type}
  */
  readonly type?: string;
  /**
  * Aqua version functionality supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/firewall_policy#version FirewallPolicy#version}
  */
  readonly version?: string;
  /**
  * inbound_networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/firewall_policy#inbound_networks FirewallPolicy#inbound_networks}
  */
  readonly inboundNetworks?: FirewallPolicyInboundNetworks[] | cdktf.IResolvable;
  /**
  * outbound_networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/firewall_policy#outbound_networks FirewallPolicy#outbound_networks}
  */
  readonly outboundNetworks?: FirewallPolicyOutboundNetworks[] | cdktf.IResolvable;
}
export interface FirewallPolicyInboundNetworks {
  /**
  * Indicates whether the specified resources are allowed to pass in data or requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/firewall_policy#allow FirewallPolicy#allow}
  */
  readonly allow: boolean | cdktf.IResolvable;
  /**
  * Range of ports affected by firewall.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/firewall_policy#port_range FirewallPolicy#port_range}
  */
  readonly portRange: string;
  /**
  * Information of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/firewall_policy#resource FirewallPolicy#resource}
  */
  readonly resource?: string;
  /**
  * Type of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/firewall_policy#resource_type FirewallPolicy#resource_type}
  */
  readonly resourceType: string;
}

export function firewallPolicyInboundNetworksToTerraform(struct?: FirewallPolicyInboundNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow: cdktf.booleanToTerraform(struct!.allow),
    port_range: cdktf.stringToTerraform(struct!.portRange),
    resource: cdktf.stringToTerraform(struct!.resource),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
  }
}


export function firewallPolicyInboundNetworksToHclTerraform(struct?: FirewallPolicyInboundNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow: {
      value: cdktf.booleanToHclTerraform(struct!.allow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port_range: {
      value: cdktf.stringToHclTerraform(struct!.portRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicyInboundNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicyInboundNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow;
    }
    if (this._portRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRange = this._portRange;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyInboundNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allow = undefined;
      this._portRange = undefined;
      this._resource = undefined;
      this._resourceType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allow = value.allow;
      this._portRange = value.portRange;
      this._resource = value.resource;
      this._resourceType = value.resourceType;
    }
  }

  // allow - computed: false, optional: false, required: true
  private _allow?: boolean | cdktf.IResolvable; 
  public get allow() {
    return this.getBooleanAttribute('allow');
  }
  public set allow(value: boolean | cdktf.IResolvable) {
    this._allow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow;
  }

  // port_range - computed: false, optional: false, required: true
  private _portRange?: string; 
  public get portRange() {
    return this.getStringAttribute('port_range');
  }
  public set portRange(value: string) {
    this._portRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeInput() {
    return this._portRange;
  }

  // resource - computed: true, optional: true, required: false
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }
}

export class FirewallPolicyInboundNetworksList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicyInboundNetworks[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicyInboundNetworksOutputReference {
    return new FirewallPolicyInboundNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicyOutboundNetworks {
  /**
  * Indicates whether the specified resources are allowed to receive data or requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/firewall_policy#allow FirewallPolicy#allow}
  */
  readonly allow: boolean | cdktf.IResolvable;
  /**
  * Range of ports affected by firewall.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/firewall_policy#port_range FirewallPolicy#port_range}
  */
  readonly portRange: string;
  /**
  * Information of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/firewall_policy#resource FirewallPolicy#resource}
  */
  readonly resource?: string;
  /**
  * Type of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/firewall_policy#resource_type FirewallPolicy#resource_type}
  */
  readonly resourceType: string;
}

export function firewallPolicyOutboundNetworksToTerraform(struct?: FirewallPolicyOutboundNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow: cdktf.booleanToTerraform(struct!.allow),
    port_range: cdktf.stringToTerraform(struct!.portRange),
    resource: cdktf.stringToTerraform(struct!.resource),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
  }
}


export function firewallPolicyOutboundNetworksToHclTerraform(struct?: FirewallPolicyOutboundNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow: {
      value: cdktf.booleanToHclTerraform(struct!.allow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port_range: {
      value: cdktf.stringToHclTerraform(struct!.portRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicyOutboundNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicyOutboundNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow;
    }
    if (this._portRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRange = this._portRange;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyOutboundNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allow = undefined;
      this._portRange = undefined;
      this._resource = undefined;
      this._resourceType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allow = value.allow;
      this._portRange = value.portRange;
      this._resource = value.resource;
      this._resourceType = value.resourceType;
    }
  }

  // allow - computed: false, optional: false, required: true
  private _allow?: boolean | cdktf.IResolvable; 
  public get allow() {
    return this.getBooleanAttribute('allow');
  }
  public set allow(value: boolean | cdktf.IResolvable) {
    this._allow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow;
  }

  // port_range - computed: false, optional: false, required: true
  private _portRange?: string; 
  public get portRange() {
    return this.getStringAttribute('port_range');
  }
  public set portRange(value: string) {
    this._portRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeInput() {
    return this._portRange;
  }

  // resource - computed: true, optional: true, required: false
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }
}

export class FirewallPolicyOutboundNetworksList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicyOutboundNetworks[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicyOutboundNetworksOutputReference {
    return new FirewallPolicyOutboundNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/firewall_policy aquasec_firewall_policy}
*/
export class FirewallPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aquasec_firewall_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallPolicy to import
  * @param importFromId The id of the existing FirewallPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/firewall_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aquasec_firewall_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/firewall_policy aquasec_firewall_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aquasec_firewall_policy',
      terraformGeneratorMetadata: {
        providerName: 'aquasec',
        providerVersion: '0.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blockIcmpPing = config.blockIcmpPing;
    this._blockMetadataService = config.blockMetadataService;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._type = config.type;
    this._version = config.version;
    this._inboundNetworks.internalValue = config.inboundNetworks;
    this._outboundNetworks.internalValue = config.outboundNetworks;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // author - computed: true, optional: false, required: false
  public get author() {
    return this.getStringAttribute('author');
  }

  // block_icmp_ping - computed: false, optional: true, required: false
  private _blockIcmpPing?: boolean | cdktf.IResolvable; 
  public get blockIcmpPing() {
    return this.getBooleanAttribute('block_icmp_ping');
  }
  public set blockIcmpPing(value: boolean | cdktf.IResolvable) {
    this._blockIcmpPing = value;
  }
  public resetBlockIcmpPing() {
    this._blockIcmpPing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockIcmpPingInput() {
    return this._blockIcmpPing;
  }

  // block_metadata_service - computed: false, optional: true, required: false
  private _blockMetadataService?: boolean | cdktf.IResolvable; 
  public get blockMetadataService() {
    return this.getBooleanAttribute('block_metadata_service');
  }
  public set blockMetadataService(value: boolean | cdktf.IResolvable) {
    this._blockMetadataService = value;
  }
  public resetBlockMetadataService() {
    this._blockMetadataService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockMetadataServiceInput() {
    return this._blockMetadataService;
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

  // lastupdate - computed: true, optional: false, required: false
  public get lastupdate() {
    return this.getNumberAttribute('lastupdate');
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

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // inbound_networks - computed: false, optional: true, required: false
  private _inboundNetworks = new FirewallPolicyInboundNetworksList(this, "inbound_networks", false);
  public get inboundNetworks() {
    return this._inboundNetworks;
  }
  public putInboundNetworks(value: FirewallPolicyInboundNetworks[] | cdktf.IResolvable) {
    this._inboundNetworks.internalValue = value;
  }
  public resetInboundNetworks() {
    this._inboundNetworks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundNetworksInput() {
    return this._inboundNetworks.internalValue;
  }

  // outbound_networks - computed: false, optional: true, required: false
  private _outboundNetworks = new FirewallPolicyOutboundNetworksList(this, "outbound_networks", false);
  public get outboundNetworks() {
    return this._outboundNetworks;
  }
  public putOutboundNetworks(value: FirewallPolicyOutboundNetworks[] | cdktf.IResolvable) {
    this._outboundNetworks.internalValue = value;
  }
  public resetOutboundNetworks() {
    this._outboundNetworks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundNetworksInput() {
    return this._outboundNetworks.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      block_icmp_ping: cdktf.booleanToTerraform(this._blockIcmpPing),
      block_metadata_service: cdktf.booleanToTerraform(this._blockMetadataService),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
      version: cdktf.stringToTerraform(this._version),
      inbound_networks: cdktf.listMapper(firewallPolicyInboundNetworksToTerraform, true)(this._inboundNetworks.internalValue),
      outbound_networks: cdktf.listMapper(firewallPolicyOutboundNetworksToTerraform, true)(this._outboundNetworks.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      block_icmp_ping: {
        value: cdktf.booleanToHclTerraform(this._blockIcmpPing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      block_metadata_service: {
        value: cdktf.booleanToHclTerraform(this._blockMetadataService),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inbound_networks: {
        value: cdktf.listMapperHcl(firewallPolicyInboundNetworksToHclTerraform, true)(this._inboundNetworks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirewallPolicyInboundNetworksList",
      },
      outbound_networks: {
        value: cdktf.listMapperHcl(firewallPolicyOutboundNetworksToHclTerraform, true)(this._outboundNetworks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirewallPolicyOutboundNetworksList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
