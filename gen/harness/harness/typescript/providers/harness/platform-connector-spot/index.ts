// https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_spot
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformConnectorSpotConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_spot#description PlatformConnectorSpot#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_spot#id PlatformConnectorSpot#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique identifier of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_spot#identifier PlatformConnectorSpot#identifier}
  */
  readonly identifier: string;
  /**
  * Name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_spot#name PlatformConnectorSpot#name}
  */
  readonly name: string;
  /**
  * Unique identifier of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_spot#org_id PlatformConnectorSpot#org_id}
  */
  readonly orgId?: string;
  /**
  * Unique identifier of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_spot#project_id PlatformConnectorSpot#project_id}
  */
  readonly projectId?: string;
  /**
  * Tags to associate with the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_spot#tags PlatformConnectorSpot#tags}
  */
  readonly tags?: string[];
  /**
  * permanent_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_spot#permanent_token PlatformConnectorSpot#permanent_token}
  */
  readonly permanentToken: PlatformConnectorSpotPermanentToken;
}
export interface PlatformConnectorSpotPermanentToken {
  /**
  * Reference to the Harness secret containing the permanent api token. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_spot#api_token_ref PlatformConnectorSpot#api_token_ref}
  */
  readonly apiTokenRef: string;
  /**
  * Connect only using delegates with these tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_spot#delegate_selectors PlatformConnectorSpot#delegate_selectors}
  */
  readonly delegateSelectors?: string[];
  /**
  * Execute on delegate or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_spot#execute_on_delegate PlatformConnectorSpot#execute_on_delegate}
  */
  readonly executeOnDelegate?: boolean | cdktf.IResolvable;
  /**
  * Spot account id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_spot#spot_account_id PlatformConnectorSpot#spot_account_id}
  */
  readonly spotAccountId?: string;
  /**
  * Reference to the Harness secret containing the spot account id. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_spot#spot_account_id_ref PlatformConnectorSpot#spot_account_id_ref}
  */
  readonly spotAccountIdRef?: string;
}

export function platformConnectorSpotPermanentTokenToTerraform(struct?: PlatformConnectorSpotPermanentTokenOutputReference | PlatformConnectorSpotPermanentToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_token_ref: cdktf.stringToTerraform(struct!.apiTokenRef),
    delegate_selectors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.delegateSelectors),
    execute_on_delegate: cdktf.booleanToTerraform(struct!.executeOnDelegate),
    spot_account_id: cdktf.stringToTerraform(struct!.spotAccountId),
    spot_account_id_ref: cdktf.stringToTerraform(struct!.spotAccountIdRef),
  }
}


export function platformConnectorSpotPermanentTokenToHclTerraform(struct?: PlatformConnectorSpotPermanentTokenOutputReference | PlatformConnectorSpotPermanentToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_token_ref: {
      value: cdktf.stringToHclTerraform(struct!.apiTokenRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delegate_selectors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.delegateSelectors),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    execute_on_delegate: {
      value: cdktf.booleanToHclTerraform(struct!.executeOnDelegate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    spot_account_id: {
      value: cdktf.stringToHclTerraform(struct!.spotAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spot_account_id_ref: {
      value: cdktf.stringToHclTerraform(struct!.spotAccountIdRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformConnectorSpotPermanentTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformConnectorSpotPermanentToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiTokenRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiTokenRef = this._apiTokenRef;
    }
    if (this._delegateSelectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.delegateSelectors = this._delegateSelectors;
    }
    if (this._executeOnDelegate !== undefined) {
      hasAnyValues = true;
      internalValueResult.executeOnDelegate = this._executeOnDelegate;
    }
    if (this._spotAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotAccountId = this._spotAccountId;
    }
    if (this._spotAccountIdRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotAccountIdRef = this._spotAccountIdRef;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformConnectorSpotPermanentToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiTokenRef = undefined;
      this._delegateSelectors = undefined;
      this._executeOnDelegate = undefined;
      this._spotAccountId = undefined;
      this._spotAccountIdRef = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiTokenRef = value.apiTokenRef;
      this._delegateSelectors = value.delegateSelectors;
      this._executeOnDelegate = value.executeOnDelegate;
      this._spotAccountId = value.spotAccountId;
      this._spotAccountIdRef = value.spotAccountIdRef;
    }
  }

  // api_token_ref - computed: false, optional: false, required: true
  private _apiTokenRef?: string; 
  public get apiTokenRef() {
    return this.getStringAttribute('api_token_ref');
  }
  public set apiTokenRef(value: string) {
    this._apiTokenRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenRefInput() {
    return this._apiTokenRef;
  }

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

  // execute_on_delegate - computed: false, optional: true, required: false
  private _executeOnDelegate?: boolean | cdktf.IResolvable; 
  public get executeOnDelegate() {
    return this.getBooleanAttribute('execute_on_delegate');
  }
  public set executeOnDelegate(value: boolean | cdktf.IResolvable) {
    this._executeOnDelegate = value;
  }
  public resetExecuteOnDelegate() {
    this._executeOnDelegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeOnDelegateInput() {
    return this._executeOnDelegate;
  }

  // spot_account_id - computed: false, optional: true, required: false
  private _spotAccountId?: string; 
  public get spotAccountId() {
    return this.getStringAttribute('spot_account_id');
  }
  public set spotAccountId(value: string) {
    this._spotAccountId = value;
  }
  public resetSpotAccountId() {
    this._spotAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotAccountIdInput() {
    return this._spotAccountId;
  }

  // spot_account_id_ref - computed: false, optional: true, required: false
  private _spotAccountIdRef?: string; 
  public get spotAccountIdRef() {
    return this.getStringAttribute('spot_account_id_ref');
  }
  public set spotAccountIdRef(value: string) {
    this._spotAccountIdRef = value;
  }
  public resetSpotAccountIdRef() {
    this._spotAccountIdRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotAccountIdRefInput() {
    return this._spotAccountIdRef;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_spot harness_platform_connector_spot}
*/
export class PlatformConnectorSpot extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_connector_spot";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformConnectorSpot resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformConnectorSpot to import
  * @param importFromId The id of the existing PlatformConnectorSpot that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_spot#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformConnectorSpot to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_connector_spot", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_spot harness_platform_connector_spot} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformConnectorSpotConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformConnectorSpotConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_connector_spot',
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
    this._description = config.description;
    this._id = config.id;
    this._identifier = config.identifier;
    this._name = config.name;
    this._orgId = config.orgId;
    this._projectId = config.projectId;
    this._tags = config.tags;
    this._permanentToken.internalValue = config.permanentToken;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // permanent_token - computed: false, optional: false, required: true
  private _permanentToken = new PlatformConnectorSpotPermanentTokenOutputReference(this, "permanent_token");
  public get permanentToken() {
    return this._permanentToken;
  }
  public putPermanentToken(value: PlatformConnectorSpotPermanentToken) {
    this._permanentToken.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permanentTokenInput() {
    return this._permanentToken.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_id: cdktf.stringToTerraform(this._projectId),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      permanent_token: platformConnectorSpotPermanentTokenToTerraform(this._permanentToken.internalValue),
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
      permanent_token: {
        value: platformConnectorSpotPermanentTokenToHclTerraform(this._permanentToken.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformConnectorSpotPermanentTokenList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
