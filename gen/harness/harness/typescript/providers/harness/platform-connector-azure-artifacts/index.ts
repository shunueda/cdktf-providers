// https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_azure_artifacts
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformConnectorAzureArtifactsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Tags to filter delegates for connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_azure_artifacts#delegate_selectors PlatformConnectorAzureArtifacts#delegate_selectors}
  */
  readonly delegateSelectors?: string[];
  /**
  * Description of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_azure_artifacts#description PlatformConnectorAzureArtifacts#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_azure_artifacts#id PlatformConnectorAzureArtifacts#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique identifier of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_azure_artifacts#identifier PlatformConnectorAzureArtifacts#identifier}
  */
  readonly identifier: string;
  /**
  * Name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_azure_artifacts#name PlatformConnectorAzureArtifacts#name}
  */
  readonly name: string;
  /**
  * Unique identifier of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_azure_artifacts#org_id PlatformConnectorAzureArtifacts#org_id}
  */
  readonly orgId?: string;
  /**
  * Unique identifier of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_azure_artifacts#project_id PlatformConnectorAzureArtifacts#project_id}
  */
  readonly projectId?: string;
  /**
  * Tags to associate with the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_azure_artifacts#tags PlatformConnectorAzureArtifacts#tags}
  */
  readonly tags?: string[];
  /**
  * URL of the Azure Artifacts server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_azure_artifacts#url PlatformConnectorAzureArtifacts#url}
  */
  readonly url: string;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_azure_artifacts#credentials PlatformConnectorAzureArtifacts#credentials}
  */
  readonly credentials: PlatformConnectorAzureArtifactsCredentials;
}
export interface PlatformConnectorAzureArtifactsCredentials {
  /**
  * Reference to a secret containing the token to use for authentication. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_azure_artifacts#token_ref PlatformConnectorAzureArtifacts#token_ref}
  */
  readonly tokenRef: string;
}

export function platformConnectorAzureArtifactsCredentialsToTerraform(struct?: PlatformConnectorAzureArtifactsCredentialsOutputReference | PlatformConnectorAzureArtifactsCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    token_ref: cdktf.stringToTerraform(struct!.tokenRef),
  }
}


export function platformConnectorAzureArtifactsCredentialsToHclTerraform(struct?: PlatformConnectorAzureArtifactsCredentialsOutputReference | PlatformConnectorAzureArtifactsCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    token_ref: {
      value: cdktf.stringToHclTerraform(struct!.tokenRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformConnectorAzureArtifactsCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformConnectorAzureArtifactsCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tokenRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenRef = this._tokenRef;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformConnectorAzureArtifactsCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tokenRef = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tokenRef = value.tokenRef;
    }
  }

  // token_ref - computed: false, optional: false, required: true
  private _tokenRef?: string; 
  public get tokenRef() {
    return this.getStringAttribute('token_ref');
  }
  public set tokenRef(value: string) {
    this._tokenRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenRefInput() {
    return this._tokenRef;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_azure_artifacts harness_platform_connector_azure_artifacts}
*/
export class PlatformConnectorAzureArtifacts extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_connector_azure_artifacts";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformConnectorAzureArtifacts resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformConnectorAzureArtifacts to import
  * @param importFromId The id of the existing PlatformConnectorAzureArtifacts that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_azure_artifacts#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformConnectorAzureArtifacts to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_connector_azure_artifacts", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_azure_artifacts harness_platform_connector_azure_artifacts} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformConnectorAzureArtifactsConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformConnectorAzureArtifactsConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_connector_azure_artifacts',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.3',
        providerVersionConstraint: '0.39.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._delegateSelectors = config.delegateSelectors;
    this._description = config.description;
    this._id = config.id;
    this._identifier = config.identifier;
    this._name = config.name;
    this._orgId = config.orgId;
    this._projectId = config.projectId;
    this._tags = config.tags;
    this._url = config.url;
    this._credentials.internalValue = config.credentials;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delegate_selectors - computed: false, optional: true, required: false
  private _delegateSelectors?: string[]; 
  public get delegateSelectors() {
    return cdktf.Fn.tolist(this.getListAttribute('delegate_selectors'));
  }
  public set delegateSelectors(value: string[]) {
    this._delegateSelectors = value;
  }
  public resetDelegateSelectors() {
    this._delegateSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegateSelectorsInput() {
    return this._delegateSelectors;
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

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
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

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials = new PlatformConnectorAzureArtifactsCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: PlatformConnectorAzureArtifactsCredentials) {
    this._credentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delegate_selectors: cdktf.listMapper(cdktf.stringToTerraform, false)(this._delegateSelectors),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_id: cdktf.stringToTerraform(this._projectId),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      url: cdktf.stringToTerraform(this._url),
      credentials: platformConnectorAzureArtifactsCredentialsToTerraform(this._credentials.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delegate_selectors: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._delegateSelectors),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
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
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
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
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credentials: {
        value: platformConnectorAzureArtifactsCredentialsToHclTerraform(this._credentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformConnectorAzureArtifactsCredentialsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
