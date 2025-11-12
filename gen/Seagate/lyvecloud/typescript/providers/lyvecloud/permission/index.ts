// https://registry.terraform.io/providers/seagate/lyvecloud/0.2.2/docs/resources/permission
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PermissionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/seagate/lyvecloud/0.2.2/docs/resources/permission#actions Permission#actions}
  */
  readonly actions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/seagate/lyvecloud/0.2.2/docs/resources/permission#all_buckets Permission#all_buckets}
  */
  readonly allBuckets?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/seagate/lyvecloud/0.2.2/docs/resources/permission#bucket_prefix Permission#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/seagate/lyvecloud/0.2.2/docs/resources/permission#buckets Permission#buckets}
  */
  readonly buckets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/seagate/lyvecloud/0.2.2/docs/resources/permission#description Permission#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/seagate/lyvecloud/0.2.2/docs/resources/permission#name Permission#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/seagate/lyvecloud/0.2.2/docs/resources/permission#name_prefix Permission#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/seagate/lyvecloud/0.2.2/docs/resources/permission#policy Permission#policy}
  */
  readonly policy?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/seagate/lyvecloud/0.2.2/docs/resources/permission lyvecloud_permission}
*/
export class Permission extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "lyvecloud_permission";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Permission resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Permission to import
  * @param importFromId The id of the existing Permission that should be imported. Refer to the {@link https://registry.terraform.io/providers/seagate/lyvecloud/0.2.2/docs/resources/permission#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Permission to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "lyvecloud_permission", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/seagate/lyvecloud/0.2.2/docs/resources/permission lyvecloud_permission} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PermissionConfig
  */
  public constructor(scope: Construct, id: string, config: PermissionConfig) {
    super(scope, id, {
      terraformResourceType: 'lyvecloud_permission',
      terraformGeneratorMetadata: {
        providerName: 'lyvecloud',
        providerVersion: '0.2.2',
        providerVersionConstraint: '0.2.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actions = config.actions;
    this._allBuckets = config.allBuckets;
    this._bucketPrefix = config.bucketPrefix;
    this._buckets = config.buckets;
    this._description = config.description;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._policy = config.policy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actions - computed: false, optional: true, required: false
  private _actions?: string; 
  public get actions() {
    return this.getStringAttribute('actions');
  }
  public set actions(value: string) {
    this._actions = value;
  }
  public resetActions() {
    this._actions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // all_buckets - computed: false, optional: true, required: false
  private _allBuckets?: boolean | cdktf.IResolvable; 
  public get allBuckets() {
    return this.getBooleanAttribute('all_buckets');
  }
  public set allBuckets(value: boolean | cdktf.IResolvable) {
    this._allBuckets = value;
  }
  public resetAllBuckets() {
    this._allBuckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allBucketsInput() {
    return this._allBuckets;
  }

  // bucket_prefix - computed: false, optional: true, required: false
  private _bucketPrefix?: string; 
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
  public set bucketPrefix(value: string) {
    this._bucketPrefix = value;
  }
  public resetBucketPrefix() {
    this._bucketPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixInput() {
    return this._bucketPrefix;
  }

  // buckets - computed: false, optional: true, required: false
  private _buckets?: string[]; 
  public get buckets() {
    return this.getListAttribute('buckets');
  }
  public set buckets(value: string[]) {
    this._buckets = value;
  }
  public resetBuckets() {
    this._buckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketsInput() {
    return this._buckets;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // name_prefix - computed: true, optional: true, required: false
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // ready_state - computed: true, optional: false, required: false
  public get readyState() {
    return this.getBooleanAttribute('ready_state');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      actions: cdktf.stringToTerraform(this._actions),
      all_buckets: cdktf.booleanToTerraform(this._allBuckets),
      bucket_prefix: cdktf.stringToTerraform(this._bucketPrefix),
      buckets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._buckets),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      policy: cdktf.stringToTerraform(this._policy),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      actions: {
        value: cdktf.stringToHclTerraform(this._actions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      all_buckets: {
        value: cdktf.booleanToHclTerraform(this._allBuckets),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bucket_prefix: {
        value: cdktf.stringToHclTerraform(this._bucketPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      buckets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._buckets),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name_prefix: {
        value: cdktf.stringToHclTerraform(this._namePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy: {
        value: cdktf.stringToHclTerraform(this._policy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
