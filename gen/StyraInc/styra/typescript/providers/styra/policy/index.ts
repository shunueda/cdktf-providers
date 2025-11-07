// https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * etag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/policy#if_none_match Policy#if_none_match}
  */
  readonly ifNoneMatch?: string;
  /**
  * module file name to rego (and also data.json/data.yaml if enabled for the tenant) contents dictionary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/policy#modules Policy#modules}
  */
  readonly modules: { [key: string]: string };
  /**
  * policy name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/policy#policy Policy#policy}
  */
  readonly policy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/policy#signature Policy#signature}
  */
  readonly signature?: PolicySignature;
}
export interface PolicySignature {
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/policy#excluded Policy#excluded}
  */
  readonly excluded?: string;
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/policy#signatures Policy#signatures}
  */
  readonly signatures?: string;
}

export function policySignatureToTerraform(struct?: PolicySignature | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded: cdktf.stringToTerraform(struct!.excluded),
    signatures: cdktf.stringToTerraform(struct!.signatures),
  }
}


export function policySignatureToHclTerraform(struct?: PolicySignature | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excluded: {
      value: cdktf.stringToHclTerraform(struct!.excluded),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signatures: {
      value: cdktf.stringToHclTerraform(struct!.signatures),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicySignatureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PolicySignature | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excluded !== undefined) {
      hasAnyValues = true;
      internalValueResult.excluded = this._excluded;
    }
    if (this._signatures !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatures = this._signatures;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicySignature | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excluded = undefined;
      this._signatures = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excluded = value.excluded;
      this._signatures = value.signatures;
    }
  }

  // excluded - computed: false, optional: true, required: false
  private _excluded?: string; 
  public get excluded() {
    return this.getStringAttribute('excluded');
  }
  public set excluded(value: string) {
    this._excluded = value;
  }
  public resetExcluded() {
    this._excluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedInput() {
    return this._excluded;
  }

  // signatures - computed: false, optional: true, required: false
  private _signatures?: string; 
  public get signatures() {
    return this.getStringAttribute('signatures');
  }
  public set signatures(value: string) {
    this._signatures = value;
  }
  public resetSignatures() {
    this._signatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signaturesInput() {
    return this._signatures;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/policy styra_policy}
*/
export class Policy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "styra_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Policy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Policy to import
  * @param importFromId The id of the existing Policy that should be imported. Refer to the {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Policy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "styra_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/policy styra_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'styra_policy',
      terraformGeneratorMetadata: {
        providerName: 'styra',
        providerVersion: '0.2.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ifNoneMatch = config.ifNoneMatch;
    this._modules = config.modules;
    this._policy = config.policy;
    this._signature.internalValue = config.signature;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // if_none_match - computed: false, optional: true, required: false
  private _ifNoneMatch?: string; 
  public get ifNoneMatch() {
    return this.getStringAttribute('if_none_match');
  }
  public set ifNoneMatch(value: string) {
    this._ifNoneMatch = value;
  }
  public resetIfNoneMatch() {
    this._ifNoneMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifNoneMatchInput() {
    return this._ifNoneMatch;
  }

  // modules - computed: false, optional: false, required: true
  private _modules?: { [key: string]: string }; 
  public get modules() {
    return this.getStringMapAttribute('modules');
  }
  public set modules(value: { [key: string]: string }) {
    this._modules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modulesInput() {
    return this._modules;
  }

  // policy - computed: false, optional: false, required: true
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // request_id - computed: true, optional: false, required: false
  public get requestId() {
    return this.getStringAttribute('request_id');
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }

  // signature - computed: false, optional: true, required: false
  private _signature = new PolicySignatureOutputReference(this, "signature");
  public get signature() {
    return this._signature;
  }
  public putSignature(value: PolicySignature) {
    this._signature.internalValue = value;
  }
  public resetSignature() {
    this._signature.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureInput() {
    return this._signature.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      if_none_match: cdktf.stringToTerraform(this._ifNoneMatch),
      modules: cdktf.hashMapper(cdktf.stringToTerraform)(this._modules),
      policy: cdktf.stringToTerraform(this._policy),
      signature: policySignatureToTerraform(this._signature.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      if_none_match: {
        value: cdktf.stringToHclTerraform(this._ifNoneMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      modules: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._modules),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      policy: {
        value: cdktf.stringToHclTerraform(this._policy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signature: {
        value: policySignatureToHclTerraform(this._signature.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PolicySignature",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
