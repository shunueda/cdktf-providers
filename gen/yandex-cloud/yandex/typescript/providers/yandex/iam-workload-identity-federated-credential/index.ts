// https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/iam_workload_identity_federated_credential
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamWorkloadIdentityFederatedCredentialConfig extends cdktf.TerraformMetaArguments {
  /**
  * Id of the external subject.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/iam_workload_identity_federated_credential#external_subject_id IamWorkloadIdentityFederatedCredential#external_subject_id}
  */
  readonly externalSubjectId: string;
  /**
  * ID of the federated credential to return.
  *  To get the federated credential ID, make a [FederatedCredentialService.List] request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/iam_workload_identity_federated_credential#federated_credential_id IamWorkloadIdentityFederatedCredential#federated_credential_id}
  */
  readonly federatedCredentialId?: string;
  /**
  * ID of the workload identity federation which is used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/iam_workload_identity_federated_credential#federation_id IamWorkloadIdentityFederatedCredential#federation_id}
  */
  readonly federationId: string;
  /**
  * ID of the federated credential to return.
  *  To get the federated credential ID, make a [FederatedCredentialService.List] request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/iam_workload_identity_federated_credential#id IamWorkloadIdentityFederatedCredential#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Id of the service account that the federated credential belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/iam_workload_identity_federated_credential#service_account_id IamWorkloadIdentityFederatedCredential#service_account_id}
  */
  readonly serviceAccountId?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/iam_workload_identity_federated_credential#timeouts IamWorkloadIdentityFederatedCredential#timeouts}
  */
  readonly timeouts?: IamWorkloadIdentityFederatedCredentialTimeouts;
}
export interface IamWorkloadIdentityFederatedCredentialTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/iam_workload_identity_federated_credential#create IamWorkloadIdentityFederatedCredential#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/iam_workload_identity_federated_credential#delete IamWorkloadIdentityFederatedCredential#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/iam_workload_identity_federated_credential#read IamWorkloadIdentityFederatedCredential#read}
  */
  readonly read?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/iam_workload_identity_federated_credential#update IamWorkloadIdentityFederatedCredential#update}
  */
  readonly update?: string;
}

export function iamWorkloadIdentityFederatedCredentialTimeoutsToTerraform(struct?: IamWorkloadIdentityFederatedCredentialTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function iamWorkloadIdentityFederatedCredentialTimeoutsToHclTerraform(struct?: IamWorkloadIdentityFederatedCredentialTimeouts | cdktf.IResolvable): any {
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

export class IamWorkloadIdentityFederatedCredentialTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IamWorkloadIdentityFederatedCredentialTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamWorkloadIdentityFederatedCredentialTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/iam_workload_identity_federated_credential yandex_iam_workload_identity_federated_credential}
*/
export class IamWorkloadIdentityFederatedCredential extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_iam_workload_identity_federated_credential";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IamWorkloadIdentityFederatedCredential resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IamWorkloadIdentityFederatedCredential to import
  * @param importFromId The id of the existing IamWorkloadIdentityFederatedCredential that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/iam_workload_identity_federated_credential#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IamWorkloadIdentityFederatedCredential to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_iam_workload_identity_federated_credential", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/iam_workload_identity_federated_credential yandex_iam_workload_identity_federated_credential} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamWorkloadIdentityFederatedCredentialConfig
  */
  public constructor(scope: Construct, id: string, config: IamWorkloadIdentityFederatedCredentialConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_iam_workload_identity_federated_credential',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.172.0',
        providerVersionConstraint: '0.172.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._externalSubjectId = config.externalSubjectId;
    this._federatedCredentialId = config.federatedCredentialId;
    this._federationId = config.federationId;
    this._id = config.id;
    this._serviceAccountId = config.serviceAccountId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // external_subject_id - computed: false, optional: false, required: true
  private _externalSubjectId?: string; 
  public get externalSubjectId() {
    return this.getStringAttribute('external_subject_id');
  }
  public set externalSubjectId(value: string) {
    this._externalSubjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalSubjectIdInput() {
    return this._externalSubjectId;
  }

  // federated_credential_id - computed: true, optional: true, required: false
  private _federatedCredentialId?: string; 
  public get federatedCredentialId() {
    return this.getStringAttribute('federated_credential_id');
  }
  public set federatedCredentialId(value: string) {
    this._federatedCredentialId = value;
  }
  public resetFederatedCredentialId() {
    this._federatedCredentialId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get federatedCredentialIdInput() {
    return this._federatedCredentialId;
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

  // service_account_id - computed: true, optional: true, required: false
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  public resetServiceAccountId() {
    this._serviceAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IamWorkloadIdentityFederatedCredentialTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IamWorkloadIdentityFederatedCredentialTimeouts) {
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
      external_subject_id: cdktf.stringToTerraform(this._externalSubjectId),
      federated_credential_id: cdktf.stringToTerraform(this._federatedCredentialId),
      federation_id: cdktf.stringToTerraform(this._federationId),
      id: cdktf.stringToTerraform(this._id),
      service_account_id: cdktf.stringToTerraform(this._serviceAccountId),
      timeouts: iamWorkloadIdentityFederatedCredentialTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      external_subject_id: {
        value: cdktf.stringToHclTerraform(this._externalSubjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      federated_credential_id: {
        value: cdktf.stringToHclTerraform(this._federatedCredentialId),
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
      service_account_id: {
        value: cdktf.stringToHclTerraform(this._serviceAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: iamWorkloadIdentityFederatedCredentialTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IamWorkloadIdentityFederatedCredentialTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
