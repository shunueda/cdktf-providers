// https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/sdrs_protectedinstance_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SdrsProtectedinstanceV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/sdrs_protectedinstance_v1#cluster_id SdrsProtectedinstanceV1#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/sdrs_protectedinstance_v1#delete_target_eip SdrsProtectedinstanceV1#delete_target_eip}
  */
  readonly deleteTargetEip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/sdrs_protectedinstance_v1#delete_target_server SdrsProtectedinstanceV1#delete_target_server}
  */
  readonly deleteTargetServer?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/sdrs_protectedinstance_v1#description SdrsProtectedinstanceV1#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/sdrs_protectedinstance_v1#group_id SdrsProtectedinstanceV1#group_id}
  */
  readonly groupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/sdrs_protectedinstance_v1#id SdrsProtectedinstanceV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/sdrs_protectedinstance_v1#name SdrsProtectedinstanceV1#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/sdrs_protectedinstance_v1#primary_ip_address SdrsProtectedinstanceV1#primary_ip_address}
  */
  readonly primaryIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/sdrs_protectedinstance_v1#primary_subnet_id SdrsProtectedinstanceV1#primary_subnet_id}
  */
  readonly primarySubnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/sdrs_protectedinstance_v1#server_id SdrsProtectedinstanceV1#server_id}
  */
  readonly serverId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/sdrs_protectedinstance_v1#timeouts SdrsProtectedinstanceV1#timeouts}
  */
  readonly timeouts?: SdrsProtectedinstanceV1Timeouts;
}
export interface SdrsProtectedinstanceV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/sdrs_protectedinstance_v1#create SdrsProtectedinstanceV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/sdrs_protectedinstance_v1#delete SdrsProtectedinstanceV1#delete}
  */
  readonly delete?: string;
}

export function sdrsProtectedinstanceV1TimeoutsToTerraform(struct?: SdrsProtectedinstanceV1Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function sdrsProtectedinstanceV1TimeoutsToHclTerraform(struct?: SdrsProtectedinstanceV1Timeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SdrsProtectedinstanceV1TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SdrsProtectedinstanceV1Timeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SdrsProtectedinstanceV1Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/sdrs_protectedinstance_v1 flexibleengine_sdrs_protectedinstance_v1}
*/
export class SdrsProtectedinstanceV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "flexibleengine_sdrs_protectedinstance_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SdrsProtectedinstanceV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SdrsProtectedinstanceV1 to import
  * @param importFromId The id of the existing SdrsProtectedinstanceV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/sdrs_protectedinstance_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SdrsProtectedinstanceV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "flexibleengine_sdrs_protectedinstance_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/sdrs_protectedinstance_v1 flexibleengine_sdrs_protectedinstance_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SdrsProtectedinstanceV1Config
  */
  public constructor(scope: Construct, id: string, config: SdrsProtectedinstanceV1Config) {
    super(scope, id, {
      terraformResourceType: 'flexibleengine_sdrs_protectedinstance_v1',
      terraformGeneratorMetadata: {
        providerName: 'flexibleengine',
        providerVersion: '1.46.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._deleteTargetEip = config.deleteTargetEip;
    this._deleteTargetServer = config.deleteTargetServer;
    this._description = config.description;
    this._groupId = config.groupId;
    this._id = config.id;
    this._name = config.name;
    this._primaryIpAddress = config.primaryIpAddress;
    this._primarySubnetId = config.primarySubnetId;
    this._serverId = config.serverId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // delete_target_eip - computed: false, optional: true, required: false
  private _deleteTargetEip?: boolean | cdktf.IResolvable; 
  public get deleteTargetEip() {
    return this.getBooleanAttribute('delete_target_eip');
  }
  public set deleteTargetEip(value: boolean | cdktf.IResolvable) {
    this._deleteTargetEip = value;
  }
  public resetDeleteTargetEip() {
    this._deleteTargetEip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteTargetEipInput() {
    return this._deleteTargetEip;
  }

  // delete_target_server - computed: false, optional: true, required: false
  private _deleteTargetServer?: boolean | cdktf.IResolvable; 
  public get deleteTargetServer() {
    return this.getBooleanAttribute('delete_target_server');
  }
  public set deleteTargetServer(value: boolean | cdktf.IResolvable) {
    this._deleteTargetServer = value;
  }
  public resetDeleteTargetServer() {
    this._deleteTargetServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteTargetServerInput() {
    return this._deleteTargetServer;
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

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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

  // primary_ip_address - computed: false, optional: true, required: false
  private _primaryIpAddress?: string; 
  public get primaryIpAddress() {
    return this.getStringAttribute('primary_ip_address');
  }
  public set primaryIpAddress(value: string) {
    this._primaryIpAddress = value;
  }
  public resetPrimaryIpAddress() {
    this._primaryIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryIpAddressInput() {
    return this._primaryIpAddress;
  }

  // primary_subnet_id - computed: false, optional: true, required: false
  private _primarySubnetId?: string; 
  public get primarySubnetId() {
    return this.getStringAttribute('primary_subnet_id');
  }
  public set primarySubnetId(value: string) {
    this._primarySubnetId = value;
  }
  public resetPrimarySubnetId() {
    this._primarySubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primarySubnetIdInput() {
    return this._primarySubnetId;
  }

  // server_id - computed: false, optional: false, required: true
  private _serverId?: string; 
  public get serverId() {
    return this.getStringAttribute('server_id');
  }
  public set serverId(value: string) {
    this._serverId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIdInput() {
    return this._serverId;
  }

  // target_server - computed: true, optional: false, required: false
  public get targetServer() {
    return this.getStringAttribute('target_server');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SdrsProtectedinstanceV1TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SdrsProtectedinstanceV1Timeouts) {
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
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      delete_target_eip: cdktf.booleanToTerraform(this._deleteTargetEip),
      delete_target_server: cdktf.booleanToTerraform(this._deleteTargetServer),
      description: cdktf.stringToTerraform(this._description),
      group_id: cdktf.stringToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      primary_ip_address: cdktf.stringToTerraform(this._primaryIpAddress),
      primary_subnet_id: cdktf.stringToTerraform(this._primarySubnetId),
      server_id: cdktf.stringToTerraform(this._serverId),
      timeouts: sdrsProtectedinstanceV1TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_target_eip: {
        value: cdktf.booleanToHclTerraform(this._deleteTargetEip),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delete_target_server: {
        value: cdktf.booleanToHclTerraform(this._deleteTargetServer),
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
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
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
      primary_ip_address: {
        value: cdktf.stringToHclTerraform(this._primaryIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_subnet_id: {
        value: cdktf.stringToHclTerraform(this._primarySubnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_id: {
        value: cdktf.stringToHclTerraform(this._serverId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: sdrsProtectedinstanceV1TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SdrsProtectedinstanceV1Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
