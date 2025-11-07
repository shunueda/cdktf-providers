// https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/fqdn_objects
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FqdnObjectsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/fqdn_objects#description FqdnObjects#description}
  */
  readonly description?: string;
  /**
  * DNS resolution, "IPV4_ONLY", "IPV6_ONLY" or "IPV4_AND_IPV6"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/fqdn_objects#dns_resolution FqdnObjects#dns_resolution}
  */
  readonly dnsResolution: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/fqdn_objects#id FqdnObjects#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/fqdn_objects#name FqdnObjects#name}
  */
  readonly name: string;
  /**
  * The value of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/fqdn_objects#value FqdnObjects#value}
  */
  readonly value: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/fqdn_objects fmc_fqdn_objects}
*/
export class FqdnObjects extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmc_fqdn_objects";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FqdnObjects resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FqdnObjects to import
  * @param importFromId The id of the existing FqdnObjects that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/fqdn_objects#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FqdnObjects to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmc_fqdn_objects", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/fqdn_objects fmc_fqdn_objects} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FqdnObjectsConfig
  */
  public constructor(scope: Construct, id: string, config: FqdnObjectsConfig) {
    super(scope, id, {
      terraformResourceType: 'fmc_fqdn_objects',
      terraformGeneratorMetadata: {
        providerName: 'fmc',
        providerVersion: '1.5.2'
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
    this._dnsResolution = config.dnsResolution;
    this._id = config.id;
    this._name = config.name;
    this._value = config.value;
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

  // dns_resolution - computed: false, optional: false, required: true
  private _dnsResolution?: string; 
  public get dnsResolution() {
    return this.getStringAttribute('dns_resolution');
  }
  public set dnsResolution(value: string) {
    this._dnsResolution = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsResolutionInput() {
    return this._dnsResolution;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      dns_resolution: cdktf.stringToTerraform(this._dnsResolution),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      value: cdktf.stringToTerraform(this._value),
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
      dns_resolution: {
        value: cdktf.stringToHclTerraform(this._dnsResolution),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
