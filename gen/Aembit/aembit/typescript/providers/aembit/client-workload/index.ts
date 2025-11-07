// https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/client_workload
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClientWorkloadConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description for the Client Workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/client_workload#description ClientWorkload#description}
  */
  readonly description?: string;
  /**
  * Set of Client Workload identities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/client_workload#identities ClientWorkload#identities}
  */
  readonly identities: ClientWorkloadIdentities[] | cdktf.IResolvable;
  /**
  * Active status of the Client Workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/client_workload#is_active ClientWorkload#is_active}
  */
  readonly isActive?: boolean | cdktf.IResolvable;
  /**
  * Name for the Client Workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/client_workload#name ClientWorkload#name}
  */
  readonly name: string;
  /**
  * Standalone Certificate Authority ID configured for this Client Workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/client_workload#standalone_certificate_authority ClientWorkload#standalone_certificate_authority}
  */
  readonly standaloneCertificateAuthority?: string;
  /**
  * Tags are key-value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/client_workload#tags ClientWorkload#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface ClientWorkloadIdentities {
  /**
  * Client identity type. Possible values are: 
  * 	* `aembitClientId`
  * 	* `awsAccountId`
  * 	* `awsEc2InstanceId`
  * 	* `awsEcsTaskFamily`
  * 	* `awsLambdaArn`
  * 	* `awsRegion`
  * 	* `azureSubscriptionId`
  * 	* `azureVmId`
  * 	* `gcpIdentityToken`
  * 	* `githubIdTokenRepository`
  * 	* `githubIdTokenSubject`
  * 	* `gitlabIdTokenSubject`
  * 	* `gitlabIdTokenProjectPath`
  * 	* `gitlabIdTokenNamespacePath`
  * 	* `gitlabIdTokenRefPath`
  * 	* `hostname`
  * 	* `k8sNamespace`
  * 	* `k8sPodName`
  * 	* `k8sPodNamePrefix`
  * 	* `k8sServiceAccountName`
  * 	* `k8sServiceAccountUID`
  * 	* `oidcIdTokenAudience`
  * 	* `oidcIdTokenIssuer`
  * 	* `oidcIdTokenSubject`
  * 	* `processName`
  * 	* `processUserName`
  * 	* `sourceIPAddress`
  * 	* `terraformIdTokenOrganizationId`
  * 	* `terraformIdTokenProjectId`
  * 	* `terraformIdTokenWorkspaceId`
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/client_workload#type ClientWorkload#type}
  */
  readonly type: string;
  /**
  * Client identity value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/client_workload#value ClientWorkload#value}
  */
  readonly value: string;
}

export function clientWorkloadIdentitiesToTerraform(struct?: ClientWorkloadIdentities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clientWorkloadIdentitiesToHclTerraform(struct?: ClientWorkloadIdentities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClientWorkloadIdentitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ClientWorkloadIdentities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientWorkloadIdentities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ClientWorkloadIdentitiesList extends cdktf.ComplexList {
  public internalValue? : ClientWorkloadIdentities[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ClientWorkloadIdentitiesOutputReference {
    return new ClientWorkloadIdentitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/client_workload aembit_client_workload}
*/
export class ClientWorkload extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aembit_client_workload";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClientWorkload resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClientWorkload to import
  * @param importFromId The id of the existing ClientWorkload that should be imported. Refer to the {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/client_workload#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClientWorkload to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aembit_client_workload", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/client_workload aembit_client_workload} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClientWorkloadConfig
  */
  public constructor(scope: Construct, id: string, config: ClientWorkloadConfig) {
    super(scope, id, {
      terraformResourceType: 'aembit_client_workload',
      terraformGeneratorMetadata: {
        providerName: 'aembit',
        providerVersion: '1.25.1'
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
    this._identities.internalValue = config.identities;
    this._isActive = config.isActive;
    this._name = config.name;
    this._standaloneCertificateAuthority = config.standaloneCertificateAuthority;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identities - computed: false, optional: false, required: true
  private _identities = new ClientWorkloadIdentitiesList(this, "identities", true);
  public get identities() {
    return this._identities;
  }
  public putIdentities(value: ClientWorkloadIdentities[] | cdktf.IResolvable) {
    this._identities.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identitiesInput() {
    return this._identities.internalValue;
  }

  // is_active - computed: true, optional: true, required: false
  private _isActive?: boolean | cdktf.IResolvable; 
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }
  public set isActive(value: boolean | cdktf.IResolvable) {
    this._isActive = value;
  }
  public resetIsActive() {
    this._isActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isActiveInput() {
    return this._isActive;
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

  // standalone_certificate_authority - computed: false, optional: true, required: false
  private _standaloneCertificateAuthority?: string; 
  public get standaloneCertificateAuthority() {
    return this.getStringAttribute('standalone_certificate_authority');
  }
  public set standaloneCertificateAuthority(value: string) {
    this._standaloneCertificateAuthority = value;
  }
  public resetStandaloneCertificateAuthority() {
    this._standaloneCertificateAuthority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standaloneCertificateAuthorityInput() {
    return this._standaloneCertificateAuthority;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      identities: cdktf.listMapper(clientWorkloadIdentitiesToTerraform, false)(this._identities.internalValue),
      is_active: cdktf.booleanToTerraform(this._isActive),
      name: cdktf.stringToTerraform(this._name),
      standalone_certificate_authority: cdktf.stringToTerraform(this._standaloneCertificateAuthority),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
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
      identities: {
        value: cdktf.listMapperHcl(clientWorkloadIdentitiesToHclTerraform, false)(this._identities.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ClientWorkloadIdentitiesList",
      },
      is_active: {
        value: cdktf.booleanToHclTerraform(this._isActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      standalone_certificate_authority: {
        value: cdktf.stringToHclTerraform(this._standaloneCertificateAuthority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
