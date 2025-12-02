// https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.4/docs/resources/acl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AclConfig extends cdktf.TerraformMetaArguments {
  /**
  * Host from which the principal will have access. Use * to allow access from any host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.4/docs/resources/acl#host Acl#host}
  */
  readonly host: string;
  /**
  * The operation type for the ACL. Accepted values are: `ALL`, `READ`, `WRITE`, `CREATE`, `DELETE`, `ALTER`, `DESCRIBE`, `CLUSTER_ACTION`, `DESCRIBE_CONFIGS`, `ALTER_CONFIGS` or `IDEMPOTENT_WRITE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.4/docs/resources/acl#operation Acl#operation}
  */
  readonly operation: string;
  /**
  * The pattern type for the ACL. Accepted values are `LITERAL` or `PREFIXED`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.4/docs/resources/acl#pattern_type Acl#pattern_type}
  */
  readonly patternType: string;
  /**
  * The permission for the ACL. Accepted values are: `ALLOW` or `DENY`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.4/docs/resources/acl#permission_type Acl#permission_type}
  */
  readonly permissionType: string;
  /**
  * The principal for the ACL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.4/docs/resources/acl#principal Acl#principal}
  */
  readonly principal: string;
  /**
  * The resource name for the ACL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.4/docs/resources/acl#resource_name Acl#resource_name}
  */
  readonly resourceName: string;
  /**
  * The type of the resource. Accepted values are: `TOPIC`, `GROUP`, `CLUSTER`, `TRANSACTIONAL_ID` or `DELEGATION_TOKEN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.4/docs/resources/acl#resource_type Acl#resource_type}
  */
  readonly resourceType: string;
  /**
  * The ID of the Virtual Cluster that the ACL applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.4/docs/resources/acl#virtual_cluster_id Acl#virtual_cluster_id}
  */
  readonly virtualClusterId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.4/docs/resources/acl warpstream_acl}
*/
export class Acl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "warpstream_acl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Acl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Acl to import
  * @param importFromId The id of the existing Acl that should be imported. Refer to the {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.4/docs/resources/acl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Acl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "warpstream_acl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.4/docs/resources/acl warpstream_acl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AclConfig
  */
  public constructor(scope: Construct, id: string, config: AclConfig) {
    super(scope, id, {
      terraformResourceType: 'warpstream_acl',
      terraformGeneratorMetadata: {
        providerName: 'warpstream',
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
    this._host = config.host;
    this._operation = config.operation;
    this._patternType = config.patternType;
    this._permissionType = config.permissionType;
    this._principal = config.principal;
    this._resourceName = config.resourceName;
    this._resourceType = config.resourceType;
    this._virtualClusterId = config.virtualClusterId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // operation - computed: false, optional: false, required: true
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // pattern_type - computed: false, optional: false, required: true
  private _patternType?: string; 
  public get patternType() {
    return this.getStringAttribute('pattern_type');
  }
  public set patternType(value: string) {
    this._patternType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternTypeInput() {
    return this._patternType;
  }

  // permission_type - computed: false, optional: false, required: true
  private _permissionType?: string; 
  public get permissionType() {
    return this.getStringAttribute('permission_type');
  }
  public set permissionType(value: string) {
    this._permissionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionTypeInput() {
    return this._permissionType;
  }

  // principal - computed: false, optional: false, required: true
  private _principal?: string; 
  public get principal() {
    return this.getStringAttribute('principal');
  }
  public set principal(value: string) {
    this._principal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal;
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

  // virtual_cluster_id - computed: false, optional: false, required: true
  private _virtualClusterId?: string; 
  public get virtualClusterId() {
    return this.getStringAttribute('virtual_cluster_id');
  }
  public set virtualClusterId(value: string) {
    this._virtualClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualClusterIdInput() {
    return this._virtualClusterId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      host: cdktf.stringToTerraform(this._host),
      operation: cdktf.stringToTerraform(this._operation),
      pattern_type: cdktf.stringToTerraform(this._patternType),
      permission_type: cdktf.stringToTerraform(this._permissionType),
      principal: cdktf.stringToTerraform(this._principal),
      resource_name: cdktf.stringToTerraform(this._resourceName),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      virtual_cluster_id: cdktf.stringToTerraform(this._virtualClusterId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      host: {
        value: cdktf.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      operation: {
        value: cdktf.stringToHclTerraform(this._operation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pattern_type: {
        value: cdktf.stringToHclTerraform(this._patternType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permission_type: {
        value: cdktf.stringToHclTerraform(this._permissionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      principal: {
        value: cdktf.stringToHclTerraform(this._principal),
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
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_cluster_id: {
        value: cdktf.stringToHclTerraform(this._virtualClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
