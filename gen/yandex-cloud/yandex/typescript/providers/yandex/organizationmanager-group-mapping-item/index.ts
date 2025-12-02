// https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/organizationmanager_group_mapping_item
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationmanagerGroupMappingItemConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the external group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/organizationmanager_group_mapping_item#external_group_id OrganizationmanagerGroupMappingItem#external_group_id}
  */
  readonly externalGroupId: string;
  /**
  * ID of the SAML Federation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/organizationmanager_group_mapping_item#federation_id OrganizationmanagerGroupMappingItem#federation_id}
  */
  readonly federationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/organizationmanager_group_mapping_item#id OrganizationmanagerGroupMappingItem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the internal group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/organizationmanager_group_mapping_item#internal_group_id OrganizationmanagerGroupMappingItem#internal_group_id}
  */
  readonly internalGroupId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/organizationmanager_group_mapping_item#timeouts OrganizationmanagerGroupMappingItem#timeouts}
  */
  readonly timeouts?: OrganizationmanagerGroupMappingItemTimeouts;
}
export interface OrganizationmanagerGroupMappingItemTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/organizationmanager_group_mapping_item#create OrganizationmanagerGroupMappingItem#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/organizationmanager_group_mapping_item#delete OrganizationmanagerGroupMappingItem#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/organizationmanager_group_mapping_item#read OrganizationmanagerGroupMappingItem#read}
  */
  readonly read?: string;
}

export function organizationmanagerGroupMappingItemTimeoutsToTerraform(struct?: OrganizationmanagerGroupMappingItemTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function organizationmanagerGroupMappingItemTimeoutsToHclTerraform(struct?: OrganizationmanagerGroupMappingItemTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationmanagerGroupMappingItemTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrganizationmanagerGroupMappingItemTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationmanagerGroupMappingItemTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/organizationmanager_group_mapping_item yandex_organizationmanager_group_mapping_item}
*/
export class OrganizationmanagerGroupMappingItem extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_organizationmanager_group_mapping_item";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationmanagerGroupMappingItem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationmanagerGroupMappingItem to import
  * @param importFromId The id of the existing OrganizationmanagerGroupMappingItem that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/organizationmanager_group_mapping_item#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationmanagerGroupMappingItem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_organizationmanager_group_mapping_item", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/organizationmanager_group_mapping_item yandex_organizationmanager_group_mapping_item} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationmanagerGroupMappingItemConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationmanagerGroupMappingItemConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_organizationmanager_group_mapping_item',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.173.0',
        providerVersionConstraint: '0.173.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._externalGroupId = config.externalGroupId;
    this._federationId = config.federationId;
    this._id = config.id;
    this._internalGroupId = config.internalGroupId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // external_group_id - computed: false, optional: false, required: true
  private _externalGroupId?: string; 
  public get externalGroupId() {
    return this.getStringAttribute('external_group_id');
  }
  public set externalGroupId(value: string) {
    this._externalGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalGroupIdInput() {
    return this._externalGroupId;
  }

  // federation_id - computed: false, optional: false, required: true
  private _federationId?: string; 
  public get federationId() {
    return this.getStringAttribute('federation_id');
  }
  public set federationId(value: string) {
    this._federationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get federationIdInput() {
    return this._federationId;
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

  // internal_group_id - computed: false, optional: false, required: true
  private _internalGroupId?: string; 
  public get internalGroupId() {
    return this.getStringAttribute('internal_group_id');
  }
  public set internalGroupId(value: string) {
    this._internalGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get internalGroupIdInput() {
    return this._internalGroupId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OrganizationmanagerGroupMappingItemTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OrganizationmanagerGroupMappingItemTimeouts) {
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
      external_group_id: cdktf.stringToTerraform(this._externalGroupId),
      federation_id: cdktf.stringToTerraform(this._federationId),
      id: cdktf.stringToTerraform(this._id),
      internal_group_id: cdktf.stringToTerraform(this._internalGroupId),
      timeouts: organizationmanagerGroupMappingItemTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      external_group_id: {
        value: cdktf.stringToHclTerraform(this._externalGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      federation_id: {
        value: cdktf.stringToHclTerraform(this._federationId),
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
      internal_group_id: {
        value: cdktf.stringToHclTerraform(this._internalGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: organizationmanagerGroupMappingItemTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrganizationmanagerGroupMappingItemTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
