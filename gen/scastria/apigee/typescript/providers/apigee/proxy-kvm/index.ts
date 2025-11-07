// https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/proxy_kvm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProxyKvmConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/proxy_kvm#encrypted ProxyKvm#encrypted}
  */
  readonly encrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/proxy_kvm#entry ProxyKvm#entry}
  */
  readonly entry?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/proxy_kvm#id ProxyKvm#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/proxy_kvm#name ProxyKvm#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/proxy_kvm#proxy_name ProxyKvm#proxy_name}
  */
  readonly proxyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/proxy_kvm#sensitive_entry ProxyKvm#sensitive_entry}
  */
  readonly sensitiveEntry?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/proxy_kvm apigee_proxy_kvm}
*/
export class ProxyKvm extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apigee_proxy_kvm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProxyKvm resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProxyKvm to import
  * @param importFromId The id of the existing ProxyKvm that should be imported. Refer to the {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/proxy_kvm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProxyKvm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apigee_proxy_kvm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/proxy_kvm apigee_proxy_kvm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProxyKvmConfig
  */
  public constructor(scope: Construct, id: string, config: ProxyKvmConfig) {
    super(scope, id, {
      terraformResourceType: 'apigee_proxy_kvm',
      terraformGeneratorMetadata: {
        providerName: 'apigee',
        providerVersion: '0.1.53'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._encrypted = config.encrypted;
    this._entry = config.entry;
    this._id = config.id;
    this._name = config.name;
    this._proxyName = config.proxyName;
    this._sensitiveEntry = config.sensitiveEntry;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // encrypted - computed: false, optional: true, required: false
  private _encrypted?: boolean | cdktf.IResolvable; 
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }
  public set encrypted(value: boolean | cdktf.IResolvable) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted;
  }

  // entry - computed: false, optional: true, required: false
  private _entry?: { [key: string]: string }; 
  public get entry() {
    return this.getStringMapAttribute('entry');
  }
  public set entry(value: { [key: string]: string }) {
    this._entry = value;
  }
  public resetEntry() {
    this._entry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryInput() {
    return this._entry;
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

  // proxy_name - computed: false, optional: false, required: true
  private _proxyName?: string; 
  public get proxyName() {
    return this.getStringAttribute('proxy_name');
  }
  public set proxyName(value: string) {
    this._proxyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyNameInput() {
    return this._proxyName;
  }

  // sensitive_entry - computed: false, optional: true, required: false
  private _sensitiveEntry?: { [key: string]: string }; 
  public get sensitiveEntry() {
    return this.getStringMapAttribute('sensitive_entry');
  }
  public set sensitiveEntry(value: { [key: string]: string }) {
    this._sensitiveEntry = value;
  }
  public resetSensitiveEntry() {
    this._sensitiveEntry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveEntryInput() {
    return this._sensitiveEntry;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      encrypted: cdktf.booleanToTerraform(this._encrypted),
      entry: cdktf.hashMapper(cdktf.stringToTerraform)(this._entry),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      proxy_name: cdktf.stringToTerraform(this._proxyName),
      sensitive_entry: cdktf.hashMapper(cdktf.stringToTerraform)(this._sensitiveEntry),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      encrypted: {
        value: cdktf.booleanToHclTerraform(this._encrypted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      entry: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._entry),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      proxy_name: {
        value: cdktf.stringToHclTerraform(this._proxyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sensitive_entry: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._sensitiveEntry),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
