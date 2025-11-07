// https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/deployment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeploymentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/deployment#id Deployment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/deployment#name Deployment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/deployment#repository Deployment#repository}
  */
  readonly repository: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/deployment#stage Deployment#stage}
  */
  readonly stage: string;
  /**
  * restrictions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/deployment#restrictions Deployment#restrictions}
  */
  readonly restrictions?: DeploymentRestrictions;
}
export interface DeploymentRestrictions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/deployment#admin_only Deployment#admin_only}
  */
  readonly adminOnly?: boolean | cdktf.IResolvable;
}

export function deploymentRestrictionsToTerraform(struct?: DeploymentRestrictionsOutputReference | DeploymentRestrictions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_only: cdktf.booleanToTerraform(struct!.adminOnly),
  }
}


export function deploymentRestrictionsToHclTerraform(struct?: DeploymentRestrictionsOutputReference | DeploymentRestrictions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_only: {
      value: cdktf.booleanToHclTerraform(struct!.adminOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentRestrictionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeploymentRestrictions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminOnly = this._adminOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentRestrictions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminOnly = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminOnly = value.adminOnly;
    }
  }

  // admin_only - computed: false, optional: true, required: false
  private _adminOnly?: boolean | cdktf.IResolvable; 
  public get adminOnly() {
    return this.getBooleanAttribute('admin_only');
  }
  public set adminOnly(value: boolean | cdktf.IResolvable) {
    this._adminOnly = value;
  }
  public resetAdminOnly() {
    this._adminOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminOnlyInput() {
    return this._adminOnly;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/deployment bitbucket_deployment}
*/
export class Deployment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bitbucket_deployment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Deployment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Deployment to import
  * @param importFromId The id of the existing Deployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/deployment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Deployment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bitbucket_deployment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/deployment bitbucket_deployment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: DeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'bitbucket_deployment',
      terraformGeneratorMetadata: {
        providerName: 'bitbucket',
        providerVersion: '2.50.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._repository = config.repository;
    this._stage = config.stage;
    this._restrictions.internalValue = config.restrictions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // stage - computed: false, optional: false, required: true
  private _stage?: string; 
  public get stage() {
    return this.getStringAttribute('stage');
  }
  public set stage(value: string) {
    this._stage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stageInput() {
    return this._stage;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // restrictions - computed: false, optional: true, required: false
  private _restrictions = new DeploymentRestrictionsOutputReference(this, "restrictions");
  public get restrictions() {
    return this._restrictions;
  }
  public putRestrictions(value: DeploymentRestrictions) {
    this._restrictions.internalValue = value;
  }
  public resetRestrictions() {
    this._restrictions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictionsInput() {
    return this._restrictions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      repository: cdktf.stringToTerraform(this._repository),
      stage: cdktf.stringToTerraform(this._stage),
      restrictions: deploymentRestrictionsToTerraform(this._restrictions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      repository: {
        value: cdktf.stringToHclTerraform(this._repository),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stage: {
        value: cdktf.stringToHclTerraform(this._stage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restrictions: {
        value: deploymentRestrictionsToHclTerraform(this._restrictions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeploymentRestrictionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
