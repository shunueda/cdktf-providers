// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/blockchain_peer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BlockchainPeerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/blockchain_peer#ad BlockchainPeer#ad}
  */
  readonly ad: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/blockchain_peer#alias BlockchainPeer#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/blockchain_peer#blockchain_platform_id BlockchainPeer#blockchain_platform_id}
  */
  readonly blockchainPlatformId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/blockchain_peer#id BlockchainPeer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/blockchain_peer#role BlockchainPeer#role}
  */
  readonly role: string;
  /**
  * ocpu_allocation_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/blockchain_peer#ocpu_allocation_param BlockchainPeer#ocpu_allocation_param}
  */
  readonly ocpuAllocationParam: BlockchainPeerOcpuAllocationParam;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/blockchain_peer#timeouts BlockchainPeer#timeouts}
  */
  readonly timeouts?: BlockchainPeerTimeouts;
}
export interface BlockchainPeerOcpuAllocationParam {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/blockchain_peer#ocpu_allocation_number BlockchainPeer#ocpu_allocation_number}
  */
  readonly ocpuAllocationNumber: number;
}

export function blockchainPeerOcpuAllocationParamToTerraform(struct?: BlockchainPeerOcpuAllocationParamOutputReference | BlockchainPeerOcpuAllocationParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ocpu_allocation_number: cdktf.numberToTerraform(struct!.ocpuAllocationNumber),
  }
}


export function blockchainPeerOcpuAllocationParamToHclTerraform(struct?: BlockchainPeerOcpuAllocationParamOutputReference | BlockchainPeerOcpuAllocationParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ocpu_allocation_number: {
      value: cdktf.numberToHclTerraform(struct!.ocpuAllocationNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BlockchainPeerOcpuAllocationParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BlockchainPeerOcpuAllocationParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ocpuAllocationNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocpuAllocationNumber = this._ocpuAllocationNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BlockchainPeerOcpuAllocationParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ocpuAllocationNumber = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ocpuAllocationNumber = value.ocpuAllocationNumber;
    }
  }

  // ocpu_allocation_number - computed: false, optional: false, required: true
  private _ocpuAllocationNumber?: number; 
  public get ocpuAllocationNumber() {
    return this.getNumberAttribute('ocpu_allocation_number');
  }
  public set ocpuAllocationNumber(value: number) {
    this._ocpuAllocationNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ocpuAllocationNumberInput() {
    return this._ocpuAllocationNumber;
  }
}
export interface BlockchainPeerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/blockchain_peer#create BlockchainPeer#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/blockchain_peer#delete BlockchainPeer#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/blockchain_peer#update BlockchainPeer#update}
  */
  readonly update?: string;
}

export function blockchainPeerTimeoutsToTerraform(struct?: BlockchainPeerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function blockchainPeerTimeoutsToHclTerraform(struct?: BlockchainPeerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BlockchainPeerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BlockchainPeerTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BlockchainPeerTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/blockchain_peer oci_blockchain_peer}
*/
export class BlockchainPeer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_blockchain_peer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BlockchainPeer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BlockchainPeer to import
  * @param importFromId The id of the existing BlockchainPeer that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/blockchain_peer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BlockchainPeer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_blockchain_peer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/blockchain_peer oci_blockchain_peer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BlockchainPeerConfig
  */
  public constructor(scope: Construct, id: string, config: BlockchainPeerConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_blockchain_peer',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ad = config.ad;
    this._alias = config.alias;
    this._blockchainPlatformId = config.blockchainPlatformId;
    this._id = config.id;
    this._role = config.role;
    this._ocpuAllocationParam.internalValue = config.ocpuAllocationParam;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ad - computed: false, optional: false, required: true
  private _ad?: string; 
  public get ad() {
    return this.getStringAttribute('ad');
  }
  public set ad(value: string) {
    this._ad = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adInput() {
    return this._ad;
  }

  // alias - computed: true, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // blockchain_platform_id - computed: false, optional: false, required: true
  private _blockchainPlatformId?: string; 
  public get blockchainPlatformId() {
    return this.getStringAttribute('blockchain_platform_id');
  }
  public set blockchainPlatformId(value: string) {
    this._blockchainPlatformId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blockchainPlatformIdInput() {
    return this._blockchainPlatformId;
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
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

  // peer_key - computed: true, optional: false, required: false
  public get peerKey() {
    return this.getStringAttribute('peer_key');
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // ocpu_allocation_param - computed: false, optional: false, required: true
  private _ocpuAllocationParam = new BlockchainPeerOcpuAllocationParamOutputReference(this, "ocpu_allocation_param");
  public get ocpuAllocationParam() {
    return this._ocpuAllocationParam;
  }
  public putOcpuAllocationParam(value: BlockchainPeerOcpuAllocationParam) {
    this._ocpuAllocationParam.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ocpuAllocationParamInput() {
    return this._ocpuAllocationParam.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BlockchainPeerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BlockchainPeerTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ad: cdktf.stringToTerraform(this._ad),
      alias: cdktf.stringToTerraform(this._alias),
      blockchain_platform_id: cdktf.stringToTerraform(this._blockchainPlatformId),
      id: cdktf.stringToTerraform(this._id),
      role: cdktf.stringToTerraform(this._role),
      ocpu_allocation_param: blockchainPeerOcpuAllocationParamToTerraform(this._ocpuAllocationParam.internalValue),
      timeouts: blockchainPeerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ad: {
        value: cdktf.stringToHclTerraform(this._ad),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      blockchain_platform_id: {
        value: cdktf.stringToHclTerraform(this._blockchainPlatformId),
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
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ocpu_allocation_param: {
        value: blockchainPeerOcpuAllocationParamToHclTerraform(this._ocpuAllocationParam.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BlockchainPeerOcpuAllocationParamList",
      },
      timeouts: {
        value: blockchainPeerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BlockchainPeerTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
