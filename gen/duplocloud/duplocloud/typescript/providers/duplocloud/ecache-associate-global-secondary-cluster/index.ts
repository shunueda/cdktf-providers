// https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/ecache_associate_global_secondary_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EcacheAssociateGlobalSecondaryClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set a password for authenticating to the ElastiCache instance.
  * 
  * See AWS documentation for the [required format](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/auth.html) of this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/ecache_associate_global_secondary_cluster#auth_token EcacheAssociateGlobalSecondaryCluster#auth_token}
  */
  readonly authToken?: string;
  /**
  * The description for secondary cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/ecache_associate_global_secondary_cluster#description EcacheAssociateGlobalSecondaryCluster#description}
  */
  readonly description?: string;
  /**
  * Specify the global datastore name with which the secondary regional cluster should be associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/ecache_associate_global_secondary_cluster#global_datastore_id EcacheAssociateGlobalSecondaryCluster#global_datastore_id}
  */
  readonly globalDatastoreId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/ecache_associate_global_secondary_cluster#id EcacheAssociateGlobalSecondaryCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the elasticache instance that need to be created as secondary regional cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/ecache_associate_global_secondary_cluster#secondary_cluster_name EcacheAssociateGlobalSecondaryCluster#secondary_cluster_name}
  */
  readonly secondaryClusterName: string;
  /**
  * Specify kms key for secondary cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/ecache_associate_global_secondary_cluster#secondary_kms_key EcacheAssociateGlobalSecondaryCluster#secondary_kms_key}
  */
  readonly secondaryKmsKey?: string;
  /**
  * The tenant_id where secondary cluster need to be created. **NOTE** The tenant_id must belong to a region different from that of the primary cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/ecache_associate_global_secondary_cluster#secondary_tenant_id EcacheAssociateGlobalSecondaryCluster#secondary_tenant_id}
  */
  readonly secondaryTenantId: string;
  /**
  * The GUID of the tenant that the elasticache instance datastore has been created in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/ecache_associate_global_secondary_cluster#tenant_id EcacheAssociateGlobalSecondaryCluster#tenant_id}
  */
  readonly tenantId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/ecache_associate_global_secondary_cluster#timeouts EcacheAssociateGlobalSecondaryCluster#timeouts}
  */
  readonly timeouts?: EcacheAssociateGlobalSecondaryClusterTimeouts;
}
export interface EcacheAssociateGlobalSecondaryClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/ecache_associate_global_secondary_cluster#create EcacheAssociateGlobalSecondaryCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/ecache_associate_global_secondary_cluster#delete EcacheAssociateGlobalSecondaryCluster#delete}
  */
  readonly delete?: string;
}

export function ecacheAssociateGlobalSecondaryClusterTimeoutsToTerraform(struct?: EcacheAssociateGlobalSecondaryClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function ecacheAssociateGlobalSecondaryClusterTimeoutsToHclTerraform(struct?: EcacheAssociateGlobalSecondaryClusterTimeouts | cdktf.IResolvable): any {
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

export class EcacheAssociateGlobalSecondaryClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EcacheAssociateGlobalSecondaryClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EcacheAssociateGlobalSecondaryClusterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/ecache_associate_global_secondary_cluster duplocloud_ecache_associate_global_secondary_cluster}
*/
export class EcacheAssociateGlobalSecondaryCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "duplocloud_ecache_associate_global_secondary_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EcacheAssociateGlobalSecondaryCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EcacheAssociateGlobalSecondaryCluster to import
  * @param importFromId The id of the existing EcacheAssociateGlobalSecondaryCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/ecache_associate_global_secondary_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EcacheAssociateGlobalSecondaryCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "duplocloud_ecache_associate_global_secondary_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/ecache_associate_global_secondary_cluster duplocloud_ecache_associate_global_secondary_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcacheAssociateGlobalSecondaryClusterConfig
  */
  public constructor(scope: Construct, id: string, config: EcacheAssociateGlobalSecondaryClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'duplocloud_ecache_associate_global_secondary_cluster',
      terraformGeneratorMetadata: {
        providerName: 'duplocloud',
        providerVersion: '0.11.28',
        providerVersionConstraint: '0.11.28'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authToken = config.authToken;
    this._description = config.description;
    this._globalDatastoreId = config.globalDatastoreId;
    this._id = config.id;
    this._secondaryClusterName = config.secondaryClusterName;
    this._secondaryKmsKey = config.secondaryKmsKey;
    this._secondaryTenantId = config.secondaryTenantId;
    this._tenantId = config.tenantId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_token - computed: false, optional: true, required: false
  private _authToken?: string; 
  public get authToken() {
    return this.getStringAttribute('auth_token');
  }
  public set authToken(value: string) {
    this._authToken = value;
  }
  public resetAuthToken() {
    this._authToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTokenInput() {
    return this._authToken;
  }

  // description - computed: true, optional: true, required: false
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

  // global_datastore_id - computed: false, optional: false, required: true
  private _globalDatastoreId?: string; 
  public get globalDatastoreId() {
    return this.getStringAttribute('global_datastore_id');
  }
  public set globalDatastoreId(value: string) {
    this._globalDatastoreId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalDatastoreIdInput() {
    return this._globalDatastoreId;
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

  // identifier - computed: true, optional: false, required: false
  public get identifier() {
    return this.getStringAttribute('identifier');
  }

  // secondary_cluster_name - computed: false, optional: false, required: true
  private _secondaryClusterName?: string; 
  public get secondaryClusterName() {
    return this.getStringAttribute('secondary_cluster_name');
  }
  public set secondaryClusterName(value: string) {
    this._secondaryClusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryClusterNameInput() {
    return this._secondaryClusterName;
  }

  // secondary_kms_key - computed: false, optional: true, required: false
  private _secondaryKmsKey?: string; 
  public get secondaryKmsKey() {
    return this.getStringAttribute('secondary_kms_key');
  }
  public set secondaryKmsKey(value: string) {
    this._secondaryKmsKey = value;
  }
  public resetSecondaryKmsKey() {
    this._secondaryKmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryKmsKeyInput() {
    return this._secondaryKmsKey;
  }

  // secondary_region - computed: true, optional: false, required: false
  public get secondaryRegion() {
    return this.getStringAttribute('secondary_region');
  }

  // secondary_tenant_id - computed: false, optional: false, required: true
  private _secondaryTenantId?: string; 
  public get secondaryTenantId() {
    return this.getStringAttribute('secondary_tenant_id');
  }
  public set secondaryTenantId(value: string) {
    this._secondaryTenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryTenantIdInput() {
    return this._secondaryTenantId;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EcacheAssociateGlobalSecondaryClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EcacheAssociateGlobalSecondaryClusterTimeouts) {
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
      auth_token: cdktf.stringToTerraform(this._authToken),
      description: cdktf.stringToTerraform(this._description),
      global_datastore_id: cdktf.stringToTerraform(this._globalDatastoreId),
      id: cdktf.stringToTerraform(this._id),
      secondary_cluster_name: cdktf.stringToTerraform(this._secondaryClusterName),
      secondary_kms_key: cdktf.stringToTerraform(this._secondaryKmsKey),
      secondary_tenant_id: cdktf.stringToTerraform(this._secondaryTenantId),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      timeouts: ecacheAssociateGlobalSecondaryClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_token: {
        value: cdktf.stringToHclTerraform(this._authToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      global_datastore_id: {
        value: cdktf.stringToHclTerraform(this._globalDatastoreId),
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
      secondary_cluster_name: {
        value: cdktf.stringToHclTerraform(this._secondaryClusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_kms_key: {
        value: cdktf.stringToHclTerraform(this._secondaryKmsKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_tenant_id: {
        value: cdktf.stringToHclTerraform(this._secondaryTenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: ecacheAssociateGlobalSecondaryClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EcacheAssociateGlobalSecondaryClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
