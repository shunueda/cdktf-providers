// https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/foundation_ipmi_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FoundationIpmiConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/foundation_ipmi_config#id FoundationIpmiConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/foundation_ipmi_config#ipmi_gateway FoundationIpmiConfig#ipmi_gateway}
  */
  readonly ipmiGateway: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/foundation_ipmi_config#ipmi_netmask FoundationIpmiConfig#ipmi_netmask}
  */
  readonly ipmiNetmask: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/foundation_ipmi_config#ipmi_password FoundationIpmiConfig#ipmi_password}
  */
  readonly ipmiPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/foundation_ipmi_config#ipmi_user FoundationIpmiConfig#ipmi_user}
  */
  readonly ipmiUser: string;
  /**
  * blocks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/foundation_ipmi_config#blocks FoundationIpmiConfig#blocks}
  */
  readonly blocks: FoundationIpmiConfigBlocks[] | cdktf.IResolvable;
}
export interface FoundationIpmiConfigBlocksNodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/foundation_ipmi_config#ipmi_configure_now FoundationIpmiConfig#ipmi_configure_now}
  */
  readonly ipmiConfigureNow: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/foundation_ipmi_config#ipmi_ip FoundationIpmiConfig#ipmi_ip}
  */
  readonly ipmiIp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/foundation_ipmi_config#ipmi_mac FoundationIpmiConfig#ipmi_mac}
  */
  readonly ipmiMac: string;
}

export function foundationIpmiConfigBlocksNodesToTerraform(struct?: FoundationIpmiConfigBlocksNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipmi_configure_now: cdktf.booleanToTerraform(struct!.ipmiConfigureNow),
    ipmi_ip: cdktf.stringToTerraform(struct!.ipmiIp),
    ipmi_mac: cdktf.stringToTerraform(struct!.ipmiMac),
  }
}


export function foundationIpmiConfigBlocksNodesToHclTerraform(struct?: FoundationIpmiConfigBlocksNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipmi_configure_now: {
      value: cdktf.booleanToHclTerraform(struct!.ipmiConfigureNow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipmi_ip: {
      value: cdktf.stringToHclTerraform(struct!.ipmiIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipmi_mac: {
      value: cdktf.stringToHclTerraform(struct!.ipmiMac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FoundationIpmiConfigBlocksNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FoundationIpmiConfigBlocksNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipmiConfigureNow !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipmiConfigureNow = this._ipmiConfigureNow;
    }
    if (this._ipmiIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipmiIp = this._ipmiIp;
    }
    if (this._ipmiMac !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipmiMac = this._ipmiMac;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FoundationIpmiConfigBlocksNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipmiConfigureNow = undefined;
      this._ipmiIp = undefined;
      this._ipmiMac = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipmiConfigureNow = value.ipmiConfigureNow;
      this._ipmiIp = value.ipmiIp;
      this._ipmiMac = value.ipmiMac;
    }
  }

  // ipmi_configure_now - computed: false, optional: false, required: true
  private _ipmiConfigureNow?: boolean | cdktf.IResolvable; 
  public get ipmiConfigureNow() {
    return this.getBooleanAttribute('ipmi_configure_now');
  }
  public set ipmiConfigureNow(value: boolean | cdktf.IResolvable) {
    this._ipmiConfigureNow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipmiConfigureNowInput() {
    return this._ipmiConfigureNow;
  }

  // ipmi_configure_successful - computed: true, optional: false, required: false
  public get ipmiConfigureSuccessful() {
    return this.getBooleanAttribute('ipmi_configure_successful');
  }

  // ipmi_ip - computed: false, optional: false, required: true
  private _ipmiIp?: string; 
  public get ipmiIp() {
    return this.getStringAttribute('ipmi_ip');
  }
  public set ipmiIp(value: string) {
    this._ipmiIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipmiIpInput() {
    return this._ipmiIp;
  }

  // ipmi_mac - computed: false, optional: false, required: true
  private _ipmiMac?: string; 
  public get ipmiMac() {
    return this.getStringAttribute('ipmi_mac');
  }
  public set ipmiMac(value: string) {
    this._ipmiMac = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipmiMacInput() {
    return this._ipmiMac;
  }

  // ipmi_message - computed: true, optional: false, required: false
  public get ipmiMessage() {
    return this.getStringAttribute('ipmi_message');
  }
}

export class FoundationIpmiConfigBlocksNodesList extends cdktf.ComplexList {
  public internalValue? : FoundationIpmiConfigBlocksNodes[] | cdktf.IResolvable

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
  public get(index: number): FoundationIpmiConfigBlocksNodesOutputReference {
    return new FoundationIpmiConfigBlocksNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FoundationIpmiConfigBlocks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/foundation_ipmi_config#block_id FoundationIpmiConfig#block_id}
  */
  readonly blockId?: string;
  /**
  * nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/foundation_ipmi_config#nodes FoundationIpmiConfig#nodes}
  */
  readonly nodes: FoundationIpmiConfigBlocksNodes[] | cdktf.IResolvable;
}

export function foundationIpmiConfigBlocksToTerraform(struct?: FoundationIpmiConfigBlocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_id: cdktf.stringToTerraform(struct!.blockId),
    nodes: cdktf.listMapper(foundationIpmiConfigBlocksNodesToTerraform, true)(struct!.nodes),
  }
}


export function foundationIpmiConfigBlocksToHclTerraform(struct?: FoundationIpmiConfigBlocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_id: {
      value: cdktf.stringToHclTerraform(struct!.blockId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nodes: {
      value: cdktf.listMapperHcl(foundationIpmiConfigBlocksNodesToHclTerraform, true)(struct!.nodes),
      isBlock: true,
      type: "list",
      storageClassType: "FoundationIpmiConfigBlocksNodesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FoundationIpmiConfigBlocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FoundationIpmiConfigBlocks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockId !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockId = this._blockId;
    }
    if (this._nodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodes = this._nodes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FoundationIpmiConfigBlocks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blockId = undefined;
      this._nodes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blockId = value.blockId;
      this._nodes.internalValue = value.nodes;
    }
  }

  // block_id - computed: false, optional: true, required: false
  private _blockId?: string; 
  public get blockId() {
    return this.getStringAttribute('block_id');
  }
  public set blockId(value: string) {
    this._blockId = value;
  }
  public resetBlockId() {
    this._blockId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockIdInput() {
    return this._blockId;
  }

  // nodes - computed: false, optional: false, required: true
  private _nodes = new FoundationIpmiConfigBlocksNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }
  public putNodes(value: FoundationIpmiConfigBlocksNodes[] | cdktf.IResolvable) {
    this._nodes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes.internalValue;
  }
}

export class FoundationIpmiConfigBlocksList extends cdktf.ComplexList {
  public internalValue? : FoundationIpmiConfigBlocks[] | cdktf.IResolvable

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
  public get(index: number): FoundationIpmiConfigBlocksOutputReference {
    return new FoundationIpmiConfigBlocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/foundation_ipmi_config nutanix_foundation_ipmi_config}
*/
export class FoundationIpmiConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_foundation_ipmi_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FoundationIpmiConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FoundationIpmiConfig to import
  * @param importFromId The id of the existing FoundationIpmiConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/foundation_ipmi_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FoundationIpmiConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_foundation_ipmi_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/foundation_ipmi_config nutanix_foundation_ipmi_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FoundationIpmiConfigConfig
  */
  public constructor(scope: Construct, id: string, config: FoundationIpmiConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'nutanix_foundation_ipmi_config',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.4',
        providerVersionConstraint: '2.3.4'
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
    this._ipmiGateway = config.ipmiGateway;
    this._ipmiNetmask = config.ipmiNetmask;
    this._ipmiPassword = config.ipmiPassword;
    this._ipmiUser = config.ipmiUser;
    this._blocks.internalValue = config.blocks;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ipmi_gateway - computed: false, optional: false, required: true
  private _ipmiGateway?: string; 
  public get ipmiGateway() {
    return this.getStringAttribute('ipmi_gateway');
  }
  public set ipmiGateway(value: string) {
    this._ipmiGateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipmiGatewayInput() {
    return this._ipmiGateway;
  }

  // ipmi_netmask - computed: false, optional: false, required: true
  private _ipmiNetmask?: string; 
  public get ipmiNetmask() {
    return this.getStringAttribute('ipmi_netmask');
  }
  public set ipmiNetmask(value: string) {
    this._ipmiNetmask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipmiNetmaskInput() {
    return this._ipmiNetmask;
  }

  // ipmi_password - computed: false, optional: false, required: true
  private _ipmiPassword?: string; 
  public get ipmiPassword() {
    return this.getStringAttribute('ipmi_password');
  }
  public set ipmiPassword(value: string) {
    this._ipmiPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipmiPasswordInput() {
    return this._ipmiPassword;
  }

  // ipmi_user - computed: false, optional: false, required: true
  private _ipmiUser?: string; 
  public get ipmiUser() {
    return this.getStringAttribute('ipmi_user');
  }
  public set ipmiUser(value: string) {
    this._ipmiUser = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipmiUserInput() {
    return this._ipmiUser;
  }

  // blocks - computed: false, optional: false, required: true
  private _blocks = new FoundationIpmiConfigBlocksList(this, "blocks", false);
  public get blocks() {
    return this._blocks;
  }
  public putBlocks(value: FoundationIpmiConfigBlocks[] | cdktf.IResolvable) {
    this._blocks.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blocksInput() {
    return this._blocks.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ipmi_gateway: cdktf.stringToTerraform(this._ipmiGateway),
      ipmi_netmask: cdktf.stringToTerraform(this._ipmiNetmask),
      ipmi_password: cdktf.stringToTerraform(this._ipmiPassword),
      ipmi_user: cdktf.stringToTerraform(this._ipmiUser),
      blocks: cdktf.listMapper(foundationIpmiConfigBlocksToTerraform, true)(this._blocks.internalValue),
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
      ipmi_gateway: {
        value: cdktf.stringToHclTerraform(this._ipmiGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipmi_netmask: {
        value: cdktf.stringToHclTerraform(this._ipmiNetmask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipmi_password: {
        value: cdktf.stringToHclTerraform(this._ipmiPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipmi_user: {
        value: cdktf.stringToHclTerraform(this._ipmiUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      blocks: {
        value: cdktf.listMapperHcl(foundationIpmiConfigBlocksToHclTerraform, true)(this._blocks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FoundationIpmiConfigBlocksList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
