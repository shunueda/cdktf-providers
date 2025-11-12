// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/resource_secret
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourceSecretConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the environment to generate an resource secret in.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/resource_secret#environment_id ResourceSecret#environment_id}
  */
  readonly environmentId: string;
  /**
  * An object that specifies the previous secret, when it expires, and when it was last used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/resource_secret#previous ResourceSecret#previous}
  */
  readonly previous?: ResourceSecretPrevious;
  /**
  * A meta-argument map of values that, if any values are changed, will force regeneration of the resource secret.  Adding values to and removing values from the map will not trigger a secret regeneration.  This parameter can be used to control time-based rotation using Terraform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/resource_secret#regenerate_trigger_values ResourceSecret#regenerate_trigger_values}
  */
  readonly regenerateTriggerValues?: { [key: string]: string };
  /**
  * The ID of the resource to generate the resource secret for. The value for `resource_id` may come from the `id` attribute of the `pingone_resource` resource or data source.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/resource_secret#resource_id ResourceSecret#resource_id}
  */
  readonly resourceId: string;
}
export interface ResourceSecretPrevious {
  /**
  * A timestamp that specifies how long this secret is saved (and can be used) before it expires. Supported time range is 1 minute to 30 days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/resource_secret#expires_at ResourceSecret#expires_at}
  */
  readonly expiresAt?: string;
}

export function resourceSecretPreviousToTerraform(struct?: ResourceSecretPrevious | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expires_at: cdktf.stringToTerraform(struct!.expiresAt),
  }
}


export function resourceSecretPreviousToHclTerraform(struct?: ResourceSecretPrevious | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expires_at: {
      value: cdktf.stringToHclTerraform(struct!.expiresAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceSecretPreviousOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceSecretPrevious | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expiresAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiresAt = this._expiresAt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceSecretPrevious | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expiresAt = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expiresAt = value.expiresAt;
    }
  }

  // expires_at - computed: false, optional: true, required: false
  private _expiresAt?: string; 
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }
  public set expiresAt(value: string) {
    this._expiresAt = value;
  }
  public resetExpiresAt() {
    this._expiresAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresAtInput() {
    return this._expiresAt;
  }

  // last_used - computed: true, optional: false, required: false
  public get lastUsed() {
    return this.getStringAttribute('last_used');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/resource_secret pingone_resource_secret}
*/
export class ResourceSecret extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_resource_secret";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ResourceSecret resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ResourceSecret to import
  * @param importFromId The id of the existing ResourceSecret that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/resource_secret#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ResourceSecret to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_resource_secret", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/resource_secret pingone_resource_secret} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourceSecretConfig
  */
  public constructor(scope: Construct, id: string, config: ResourceSecretConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_resource_secret',
      terraformGeneratorMetadata: {
        providerName: 'pingone',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._environmentId = config.environmentId;
    this._previous.internalValue = config.previous;
    this._regenerateTriggerValues = config.regenerateTriggerValues;
    this._resourceId = config.resourceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // previous - computed: false, optional: true, required: false
  private _previous = new ResourceSecretPreviousOutputReference(this, "previous");
  public get previous() {
    return this._previous;
  }
  public putPrevious(value: ResourceSecretPrevious) {
    this._previous.internalValue = value;
  }
  public resetPrevious() {
    this._previous.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previousInput() {
    return this._previous.internalValue;
  }

  // regenerate_trigger_values - computed: false, optional: true, required: false
  private _regenerateTriggerValues?: { [key: string]: string }; 
  public get regenerateTriggerValues() {
    return this.getStringMapAttribute('regenerate_trigger_values');
  }
  public set regenerateTriggerValues(value: { [key: string]: string }) {
    this._regenerateTriggerValues = value;
  }
  public resetRegenerateTriggerValues() {
    this._regenerateTriggerValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regenerateTriggerValuesInput() {
    return this._regenerateTriggerValues;
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      environment_id: cdktf.stringToTerraform(this._environmentId),
      previous: resourceSecretPreviousToTerraform(this._previous.internalValue),
      regenerate_trigger_values: cdktf.hashMapper(cdktf.stringToTerraform)(this._regenerateTriggerValues),
      resource_id: cdktf.stringToTerraform(this._resourceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      previous: {
        value: resourceSecretPreviousToHclTerraform(this._previous.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ResourceSecretPrevious",
      },
      regenerate_trigger_values: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._regenerateTriggerValues),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
