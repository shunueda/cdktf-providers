// https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs/resources/acl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AclConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs/resources/acl#acl_host Acl#acl_host}
  */
  readonly aclHost: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs/resources/acl#acl_operation Acl#acl_operation}
  */
  readonly aclOperation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs/resources/acl#acl_permission_type Acl#acl_permission_type}
  */
  readonly aclPermissionType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs/resources/acl#acl_principal Acl#acl_principal}
  */
  readonly aclPrincipal: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs/resources/acl#id Acl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs/resources/acl#resource_name Acl#resource_name}
  */
  readonly resourceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs/resources/acl#resource_pattern_type_filter Acl#resource_pattern_type_filter}
  */
  readonly resourcePatternTypeFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs/resources/acl#resource_type Acl#resource_type}
  */
  readonly resourceType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs/resources/acl kafka_acl}
*/
export class Acl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kafka_acl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Acl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Acl to import
  * @param importFromId The id of the existing Acl that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs/resources/acl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Acl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kafka_acl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongey/kafka/0.13.1/docs/resources/acl kafka_acl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AclConfig
  */
  public constructor(scope: Construct, id: string, config: AclConfig) {
    super(scope, id, {
      terraformResourceType: 'kafka_acl',
      terraformGeneratorMetadata: {
        providerName: 'kafka',
        providerVersion: '0.13.1',
        providerVersionConstraint: '0.13.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aclHost = config.aclHost;
    this._aclOperation = config.aclOperation;
    this._aclPermissionType = config.aclPermissionType;
    this._aclPrincipal = config.aclPrincipal;
    this._id = config.id;
    this._resourceName = config.resourceName;
    this._resourcePatternTypeFilter = config.resourcePatternTypeFilter;
    this._resourceType = config.resourceType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl_host - computed: false, optional: false, required: true
  private _aclHost?: string; 
  public get aclHost() {
    return this.getStringAttribute('acl_host');
  }
  public set aclHost(value: string) {
    this._aclHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aclHostInput() {
    return this._aclHost;
  }

  // acl_operation - computed: false, optional: false, required: true
  private _aclOperation?: string; 
  public get aclOperation() {
    return this.getStringAttribute('acl_operation');
  }
  public set aclOperation(value: string) {
    this._aclOperation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aclOperationInput() {
    return this._aclOperation;
  }

  // acl_permission_type - computed: false, optional: false, required: true
  private _aclPermissionType?: string; 
  public get aclPermissionType() {
    return this.getStringAttribute('acl_permission_type');
  }
  public set aclPermissionType(value: string) {
    this._aclPermissionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aclPermissionTypeInput() {
    return this._aclPermissionType;
  }

  // acl_principal - computed: false, optional: false, required: true
  private _aclPrincipal?: string; 
  public get aclPrincipal() {
    return this.getStringAttribute('acl_principal');
  }
  public set aclPrincipal(value: string) {
    this._aclPrincipal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aclPrincipalInput() {
    return this._aclPrincipal;
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

  // resource_name - computed: false, optional: false, required: true
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }

  // resource_pattern_type_filter - computed: false, optional: true, required: false
  private _resourcePatternTypeFilter?: string; 
  public get resourcePatternTypeFilter() {
    return this.getStringAttribute('resource_pattern_type_filter');
  }
  public set resourcePatternTypeFilter(value: string) {
    this._resourcePatternTypeFilter = value;
  }
  public resetResourcePatternTypeFilter() {
    this._resourcePatternTypeFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePatternTypeFilterInput() {
    return this._resourcePatternTypeFilter;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acl_host: cdktf.stringToTerraform(this._aclHost),
      acl_operation: cdktf.stringToTerraform(this._aclOperation),
      acl_permission_type: cdktf.stringToTerraform(this._aclPermissionType),
      acl_principal: cdktf.stringToTerraform(this._aclPrincipal),
      id: cdktf.stringToTerraform(this._id),
      resource_name: cdktf.stringToTerraform(this._resourceName),
      resource_pattern_type_filter: cdktf.stringToTerraform(this._resourcePatternTypeFilter),
      resource_type: cdktf.stringToTerraform(this._resourceType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acl_host: {
        value: cdktf.stringToHclTerraform(this._aclHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acl_operation: {
        value: cdktf.stringToHclTerraform(this._aclOperation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acl_permission_type: {
        value: cdktf.stringToHclTerraform(this._aclPermissionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acl_principal: {
        value: cdktf.stringToHclTerraform(this._aclPrincipal),
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
      resource_name: {
        value: cdktf.stringToHclTerraform(this._resourceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_pattern_type_filter: {
        value: cdktf.stringToHclTerraform(this._resourcePatternTypeFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
