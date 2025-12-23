// https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/sharedfilesystem_sharenetwork
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SharedfilesystemSharenetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * The human-readable description for the share network. Changing this updates the description of the existing share network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/sharedfilesystem_sharenetwork#description SharedfilesystemSharenetwork#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/sharedfilesystem_sharenetwork#id SharedfilesystemSharenetwork#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name for the share network. Changing this updates the name of the existing share network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/sharedfilesystem_sharenetwork#name SharedfilesystemSharenetwork#name}
  */
  readonly name?: string;
  /**
  * The UUID of a neutron network when setting up or updating a share network. Changing this updates the existing share network if it's not used by shares.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/sharedfilesystem_sharenetwork#neutron_net_id SharedfilesystemSharenetwork#neutron_net_id}
  */
  readonly neutronNetId: string;
  /**
  * The UUID of the neutron subnet when setting up or updating a share network. Changing this updates the existing share network if it's not used by shares.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/sharedfilesystem_sharenetwork#neutron_subnet_id SharedfilesystemSharenetwork#neutron_subnet_id}
  */
  readonly neutronSubnetId: string;
  /**
  * The region in which to obtain the Shared File System client. A Shared File System client is needed to create a share network. If omitted, the `region` argument of the provider is used. Changing this creates a new share network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/sharedfilesystem_sharenetwork#region SharedfilesystemSharenetwork#region}
  */
  readonly region?: string;
  /**
  * The list of security service IDs to associate with the share network. The security service must be specified by ID and not name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/sharedfilesystem_sharenetwork#security_service_ids SharedfilesystemSharenetwork#security_service_ids}
  */
  readonly securityServiceIds?: string[];
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/sharedfilesystem_sharenetwork#timeouts SharedfilesystemSharenetwork#timeouts}
  */
  readonly timeouts?: SharedfilesystemSharenetworkTimeouts;
}
export interface SharedfilesystemSharenetworkTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/sharedfilesystem_sharenetwork#create SharedfilesystemSharenetwork#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/sharedfilesystem_sharenetwork#delete SharedfilesystemSharenetwork#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/sharedfilesystem_sharenetwork#update SharedfilesystemSharenetwork#update}
  */
  readonly update?: string;
}

export function sharedfilesystemSharenetworkTimeoutsToTerraform(struct?: SharedfilesystemSharenetworkTimeouts | cdktf.IResolvable): any {
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


export function sharedfilesystemSharenetworkTimeoutsToHclTerraform(struct?: SharedfilesystemSharenetworkTimeouts | cdktf.IResolvable): any {
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

export class SharedfilesystemSharenetworkTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SharedfilesystemSharenetworkTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SharedfilesystemSharenetworkTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/sharedfilesystem_sharenetwork vkcs_sharedfilesystem_sharenetwork}
*/
export class SharedfilesystemSharenetwork extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vkcs_sharedfilesystem_sharenetwork";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SharedfilesystemSharenetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SharedfilesystemSharenetwork to import
  * @param importFromId The id of the existing SharedfilesystemSharenetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/sharedfilesystem_sharenetwork#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SharedfilesystemSharenetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vkcs_sharedfilesystem_sharenetwork", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/sharedfilesystem_sharenetwork vkcs_sharedfilesystem_sharenetwork} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SharedfilesystemSharenetworkConfig
  */
  public constructor(scope: Construct, id: string, config: SharedfilesystemSharenetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'vkcs_sharedfilesystem_sharenetwork',
      terraformGeneratorMetadata: {
        providerName: 'vkcs',
        providerVersion: '0.13.2',
        providerVersionConstraint: '0.13.2'
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
    this._name = config.name;
    this._neutronNetId = config.neutronNetId;
    this._neutronSubnetId = config.neutronSubnetId;
    this._region = config.region;
    this._securityServiceIds = config.securityServiceIds;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cidr - computed: true, optional: false, required: false
  public get cidr() {
    return this.getStringAttribute('cidr');
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

  // neutron_net_id - computed: false, optional: false, required: true
  private _neutronNetId?: string; 
  public get neutronNetId() {
    return this.getStringAttribute('neutron_net_id');
  }
  public set neutronNetId(value: string) {
    this._neutronNetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get neutronNetIdInput() {
    return this._neutronNetId;
  }

  // neutron_subnet_id - computed: false, optional: false, required: true
  private _neutronSubnetId?: string; 
  public get neutronSubnetId() {
    return this.getStringAttribute('neutron_subnet_id');
  }
  public set neutronSubnetId(value: string) {
    this._neutronSubnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get neutronSubnetIdInput() {
    return this._neutronSubnetId;
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // security_service_ids - computed: false, optional: true, required: false
  private _securityServiceIds?: string[]; 
  public get securityServiceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_service_ids'));
  }
  public set securityServiceIds(value: string[]) {
    this._securityServiceIds = value;
  }
  public resetSecurityServiceIds() {
    this._securityServiceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityServiceIdsInput() {
    return this._securityServiceIds;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SharedfilesystemSharenetworkTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SharedfilesystemSharenetworkTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      neutron_net_id: cdktf.stringToTerraform(this._neutronNetId),
      neutron_subnet_id: cdktf.stringToTerraform(this._neutronSubnetId),
      region: cdktf.stringToTerraform(this._region),
      security_service_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityServiceIds),
      timeouts: sharedfilesystemSharenetworkTimeoutsToTerraform(this._timeouts.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      neutron_net_id: {
        value: cdktf.stringToHclTerraform(this._neutronNetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      neutron_subnet_id: {
        value: cdktf.stringToHclTerraform(this._neutronSubnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_service_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityServiceIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      timeouts: {
        value: sharedfilesystemSharenetworkTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SharedfilesystemSharenetworkTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
