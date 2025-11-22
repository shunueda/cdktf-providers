// https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/network_acl_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkAclTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * ACL template description, up to 200 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/network_acl_template#description NetworkAclTemplate#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/network_acl_template#id NetworkAclTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ACL template location metro code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/network_acl_template#metro_code NetworkAclTemplate#metro_code}
  */
  readonly metroCode?: string;
  /**
  * ACL template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/network_acl_template#name NetworkAclTemplate#name}
  */
  readonly name: string;
  /**
  * The unique identifier of Project Resource to which ACL template is scoped to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/network_acl_template#project_id NetworkAclTemplate#project_id}
  */
  readonly projectId?: string;
  /**
  * inbound_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/network_acl_template#inbound_rule NetworkAclTemplate#inbound_rule}
  */
  readonly inboundRule: NetworkAclTemplateInboundRule[] | cdktf.IResolvable;
}
export interface NetworkAclTemplateDeviceDetails {
}

export function networkAclTemplateDeviceDetailsToTerraform(struct?: NetworkAclTemplateDeviceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function networkAclTemplateDeviceDetailsToHclTerraform(struct?: NetworkAclTemplateDeviceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NetworkAclTemplateDeviceDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkAclTemplateDeviceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkAclTemplateDeviceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acl_status - computed: true, optional: false, required: false
  public get aclStatus() {
    return this.getStringAttribute('acl_status');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class NetworkAclTemplateDeviceDetailsList extends cdktf.ComplexList {

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
  public get(index: number): NetworkAclTemplateDeviceDetailsOutputReference {
    return new NetworkAclTemplateDeviceDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkAclTemplateInboundRule {
  /**
  * Inbound rule description, up to 200 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/network_acl_template#description NetworkAclTemplate#description}
  */
  readonly description?: string;
  /**
  * Inbound traffic destination ports. Either up to 10, comma separated ports or port range or any word
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/network_acl_template#dst_port NetworkAclTemplate#dst_port}
  */
  readonly dstPort: string;
  /**
  * Inbound traffic protocol. One of: `IP`, `TCP`, `UDP`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/network_acl_template#protocol NetworkAclTemplate#protocol}
  */
  readonly protocol: string;
  /**
  * Inbound traffic source ports. Either up to 10, comma separated ports or port range or any word
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/network_acl_template#src_port NetworkAclTemplate#src_port}
  */
  readonly srcPort: string;
  /**
  * Inbound traffic source IP subnet in CIDR format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/network_acl_template#subnet NetworkAclTemplate#subnet}
  */
  readonly subnet?: string;
  /**
  * Inbound traffic source IP subnets in CIDR format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/network_acl_template#subnets NetworkAclTemplate#subnets}
  */
  readonly subnets?: string[];
}

export function networkAclTemplateInboundRuleToTerraform(struct?: NetworkAclTemplateInboundRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    dst_port: cdktf.stringToTerraform(struct!.dstPort),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    src_port: cdktf.stringToTerraform(struct!.srcPort),
    subnet: cdktf.stringToTerraform(struct!.subnet),
    subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnets),
  }
}


export function networkAclTemplateInboundRuleToHclTerraform(struct?: NetworkAclTemplateInboundRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_port: {
      value: cdktf.stringToHclTerraform(struct!.dstPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_port: {
      value: cdktf.stringToHclTerraform(struct!.srcPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet: {
      value: cdktf.stringToHclTerraform(struct!.subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkAclTemplateInboundRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkAclTemplateInboundRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._dstPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPort = this._dstPort;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._srcPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPort = this._srcPort;
    }
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    if (this._subnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkAclTemplateInboundRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._dstPort = undefined;
      this._protocol = undefined;
      this._srcPort = undefined;
      this._subnet = undefined;
      this._subnets = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._dstPort = value.dstPort;
      this._protocol = value.protocol;
      this._srcPort = value.srcPort;
      this._subnet = value.subnet;
      this._subnets = value.subnets;
    }
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

  // dst_port - computed: false, optional: false, required: true
  private _dstPort?: string; 
  public get dstPort() {
    return this.getStringAttribute('dst_port');
  }
  public set dstPort(value: string) {
    this._dstPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortInput() {
    return this._dstPort;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // sequence_number - computed: true, optional: false, required: false
  public get sequenceNumber() {
    return this.getNumberAttribute('sequence_number');
  }

  // source_type - computed: true, optional: false, required: false
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }

  // src_port - computed: false, optional: false, required: true
  private _srcPort?: string; 
  public get srcPort() {
    return this.getStringAttribute('src_port');
  }
  public set srcPort(value: string) {
    this._srcPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortInput() {
    return this._srcPort;
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }

  // subnets - computed: false, optional: true, required: false
  private _subnets?: string[]; 
  public get subnets() {
    return this.getListAttribute('subnets');
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  public resetSubnets() {
    this._subnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }
}

export class NetworkAclTemplateInboundRuleList extends cdktf.ComplexList {
  public internalValue? : NetworkAclTemplateInboundRule[] | cdktf.IResolvable

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
  public get(index: number): NetworkAclTemplateInboundRuleOutputReference {
    return new NetworkAclTemplateInboundRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/network_acl_template equinix_network_acl_template}
*/
export class NetworkAclTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "equinix_network_acl_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkAclTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkAclTemplate to import
  * @param importFromId The id of the existing NetworkAclTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/network_acl_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkAclTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "equinix_network_acl_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/network_acl_template equinix_network_acl_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkAclTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkAclTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'equinix_network_acl_template',
      terraformGeneratorMetadata: {
        providerName: 'equinix',
        providerVersion: '4.11.1',
        providerVersionConstraint: '4.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._metroCode = config.metroCode;
    this._name = config.name;
    this._projectId = config.projectId;
    this._inboundRule.internalValue = config.inboundRule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // device_acl_status - computed: true, optional: false, required: false
  public get deviceAclStatus() {
    return this.getStringAttribute('device_acl_status');
  }

  // device_details - computed: true, optional: false, required: false
  private _deviceDetails = new NetworkAclTemplateDeviceDetailsList(this, "device_details", false);
  public get deviceDetails() {
    return this._deviceDetails;
  }

  // device_id - computed: true, optional: false, required: false
  public get deviceId() {
    return this.getStringAttribute('device_id');
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

  // metro_code - computed: false, optional: true, required: false
  private _metroCode?: string; 
  public get metroCode() {
    return this.getStringAttribute('metro_code');
  }
  public set metroCode(value: string) {
    this._metroCode = value;
  }
  public resetMetroCode() {
    this._metroCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metroCodeInput() {
    return this._metroCode;
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

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // inbound_rule - computed: false, optional: false, required: true
  private _inboundRule = new NetworkAclTemplateInboundRuleList(this, "inbound_rule", false);
  public get inboundRule() {
    return this._inboundRule;
  }
  public putInboundRule(value: NetworkAclTemplateInboundRule[] | cdktf.IResolvable) {
    this._inboundRule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundRuleInput() {
    return this._inboundRule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      metro_code: cdktf.stringToTerraform(this._metroCode),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      inbound_rule: cdktf.listMapper(networkAclTemplateInboundRuleToTerraform, true)(this._inboundRule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      metro_code: {
        value: cdktf.stringToHclTerraform(this._metroCode),
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inbound_rule: {
        value: cdktf.listMapperHcl(networkAclTemplateInboundRuleToHclTerraform, true)(this._inboundRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkAclTemplateInboundRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
