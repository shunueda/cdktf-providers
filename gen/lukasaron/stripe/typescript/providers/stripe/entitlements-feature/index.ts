// https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/entitlements_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EntitlementsFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * A unique key you provide as your own system identifier. This may be up to 80 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/entitlements_feature#lookup_key EntitlementsFeature#lookup_key}
  */
  readonly lookupKey: string;
  /**
  * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/entitlements_feature#metadata EntitlementsFeature#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * The feature’s name, for your own purpose, not meant to be displayable to the customer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/entitlements_feature#name EntitlementsFeature#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/entitlements_feature stripe_entitlements_feature}
*/
export class EntitlementsFeature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stripe_entitlements_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EntitlementsFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EntitlementsFeature to import
  * @param importFromId The id of the existing EntitlementsFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/entitlements_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EntitlementsFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stripe_entitlements_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/entitlements_feature stripe_entitlements_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EntitlementsFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: EntitlementsFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'stripe_entitlements_feature',
      terraformGeneratorMetadata: {
        providerName: 'stripe',
        providerVersion: '3.4.1',
        providerVersionConstraint: '3.4.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._lookupKey = config.lookupKey;
    this._metadata = config.metadata;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // livemode - computed: true, optional: false, required: false
  public get livemode() {
    return this.getBooleanAttribute('livemode');
  }

  // lookup_key - computed: false, optional: false, required: true
  private _lookupKey?: string; 
  public get lookupKey() {
    return this.getStringAttribute('lookup_key');
  }
  public set lookupKey(value: string) {
    this._lookupKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupKeyInput() {
    return this._lookupKey;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
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

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      lookup_key: cdktf.stringToTerraform(this._lookupKey),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      lookup_key: {
        value: cdktf.stringToHclTerraform(this._lookupKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
