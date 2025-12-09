// https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/encryption_at_rest_private_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EncryptionAtRestPrivateEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Label that identifies the cloud provider for the Encryption At Rest private endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/encryption_at_rest_private_endpoint#cloud_provider EncryptionAtRestPrivateEndpoint#cloud_provider}
  */
  readonly cloudProvider: string;
  /**
  * Indicates whether to delete the resource being created if a timeout is reached when waiting for completion. When set to `true` and timeout occurs, it triggers the deletion and returns immediately without waiting for deletion to complete. When set to `false`, the timeout will not trigger resource deletion. If you suspect a transient error when the value is `true`, wait before retrying to allow resource deletion to finish. Default is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/encryption_at_rest_private_endpoint#delete_on_create_timeout EncryptionAtRestPrivateEndpoint#delete_on_create_timeout}
  */
  readonly deleteOnCreateTimeout?: boolean | cdktf.IResolvable;
  /**
  * Unique 24-hexadecimal digit string that identifies your project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/encryption_at_rest_private_endpoint#project_id EncryptionAtRestPrivateEndpoint#project_id}
  */
  readonly projectId: string;
  /**
  * Cloud provider region in which the Encryption At Rest private endpoint is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/encryption_at_rest_private_endpoint#region_name EncryptionAtRestPrivateEndpoint#region_name}
  */
  readonly regionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/encryption_at_rest_private_endpoint#timeouts EncryptionAtRestPrivateEndpoint#timeouts}
  */
  readonly timeouts?: EncryptionAtRestPrivateEndpointTimeouts;
}
export interface EncryptionAtRestPrivateEndpointTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/encryption_at_rest_private_endpoint#create EncryptionAtRestPrivateEndpoint#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/encryption_at_rest_private_endpoint#delete EncryptionAtRestPrivateEndpoint#delete}
  */
  readonly delete?: string;
}

export function encryptionAtRestPrivateEndpointTimeoutsToTerraform(struct?: EncryptionAtRestPrivateEndpointTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function encryptionAtRestPrivateEndpointTimeoutsToHclTerraform(struct?: EncryptionAtRestPrivateEndpointTimeouts | cdktf.IResolvable): any {
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

export class EncryptionAtRestPrivateEndpointTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EncryptionAtRestPrivateEndpointTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EncryptionAtRestPrivateEndpointTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/encryption_at_rest_private_endpoint mongodbatlas_encryption_at_rest_private_endpoint}
*/
export class EncryptionAtRestPrivateEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_encryption_at_rest_private_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EncryptionAtRestPrivateEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EncryptionAtRestPrivateEndpoint to import
  * @param importFromId The id of the existing EncryptionAtRestPrivateEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/encryption_at_rest_private_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EncryptionAtRestPrivateEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_encryption_at_rest_private_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/resources/encryption_at_rest_private_endpoint mongodbatlas_encryption_at_rest_private_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EncryptionAtRestPrivateEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: EncryptionAtRestPrivateEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_encryption_at_rest_private_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '2.3.0',
        providerVersionConstraint: '2.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudProvider = config.cloudProvider;
    this._deleteOnCreateTimeout = config.deleteOnCreateTimeout;
    this._projectId = config.projectId;
    this._regionName = config.regionName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_provider - computed: false, optional: false, required: true
  private _cloudProvider?: string; 
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }
  public set cloudProvider(value: string) {
    this._cloudProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider;
  }

  // delete_on_create_timeout - computed: true, optional: true, required: false
  private _deleteOnCreateTimeout?: boolean | cdktf.IResolvable; 
  public get deleteOnCreateTimeout() {
    return this.getBooleanAttribute('delete_on_create_timeout');
  }
  public set deleteOnCreateTimeout(value: boolean | cdktf.IResolvable) {
    this._deleteOnCreateTimeout = value;
  }
  public resetDeleteOnCreateTimeout() {
    this._deleteOnCreateTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteOnCreateTimeoutInput() {
    return this._deleteOnCreateTimeout;
  }

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // private_endpoint_connection_name - computed: true, optional: false, required: false
  public get privateEndpointConnectionName() {
    return this.getStringAttribute('private_endpoint_connection_name');
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // region_name - computed: false, optional: false, required: true
  private _regionName?: string; 
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
  public set regionName(value: string) {
    this._regionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNameInput() {
    return this._regionName;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EncryptionAtRestPrivateEndpointTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EncryptionAtRestPrivateEndpointTimeouts) {
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
      cloud_provider: cdktf.stringToTerraform(this._cloudProvider),
      delete_on_create_timeout: cdktf.booleanToTerraform(this._deleteOnCreateTimeout),
      project_id: cdktf.stringToTerraform(this._projectId),
      region_name: cdktf.stringToTerraform(this._regionName),
      timeouts: encryptionAtRestPrivateEndpointTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_provider: {
        value: cdktf.stringToHclTerraform(this._cloudProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_on_create_timeout: {
        value: cdktf.booleanToHclTerraform(this._deleteOnCreateTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_name: {
        value: cdktf.stringToHclTerraform(this._regionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: encryptionAtRestPrivateEndpointTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EncryptionAtRestPrivateEndpointTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
