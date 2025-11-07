// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_object_vip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallObjectVipConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_object_vip#comment FirewallObjectVip#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_object_vip#extintf FirewallObjectVip#extintf}
  */
  readonly extintf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_object_vip#extip FirewallObjectVip#extip}
  */
  readonly extip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_object_vip#extport FirewallObjectVip#extport}
  */
  readonly extport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_object_vip#id FirewallObjectVip#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_object_vip#mappedip FirewallObjectVip#mappedip}
  */
  readonly mappedip: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_object_vip#mappedport FirewallObjectVip#mappedport}
  */
  readonly mappedport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_object_vip#name FirewallObjectVip#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_object_vip#portforward FirewallObjectVip#portforward}
  */
  readonly portforward?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_object_vip#protocol FirewallObjectVip#protocol}
  */
  readonly protocol?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_object_vip fortios_firewall_object_vip}
*/
export class FirewallObjectVip extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_firewall_object_vip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallObjectVip resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallObjectVip to import
  * @param importFromId The id of the existing FirewallObjectVip that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_object_vip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallObjectVip to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_firewall_object_vip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_object_vip fortios_firewall_object_vip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallObjectVipConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallObjectVipConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_firewall_object_vip',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comment = config.comment;
    this._extintf = config.extintf;
    this._extip = config.extip;
    this._extport = config.extport;
    this._id = config.id;
    this._mappedip = config.mappedip;
    this._mappedport = config.mappedport;
    this._name = config.name;
    this._portforward = config.portforward;
    this._protocol = config.protocol;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // extintf - computed: true, optional: true, required: false
  private _extintf?: string; 
  public get extintf() {
    return this.getStringAttribute('extintf');
  }
  public set extintf(value: string) {
    this._extintf = value;
  }
  public resetExtintf() {
    this._extintf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extintfInput() {
    return this._extintf;
  }

  // extip - computed: false, optional: false, required: true
  private _extip?: string; 
  public get extip() {
    return this.getStringAttribute('extip');
  }
  public set extip(value: string) {
    this._extip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extipInput() {
    return this._extip;
  }

  // extport - computed: true, optional: true, required: false
  private _extport?: string; 
  public get extport() {
    return this.getStringAttribute('extport');
  }
  public set extport(value: string) {
    this._extport = value;
  }
  public resetExtport() {
    this._extport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extportInput() {
    return this._extport;
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

  // mappedip - computed: false, optional: false, required: true
  private _mappedip?: string[]; 
  public get mappedip() {
    return this.getListAttribute('mappedip');
  }
  public set mappedip(value: string[]) {
    this._mappedip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mappedipInput() {
    return this._mappedip;
  }

  // mappedport - computed: true, optional: true, required: false
  private _mappedport?: string; 
  public get mappedport() {
    return this.getStringAttribute('mappedport');
  }
  public set mappedport(value: string) {
    this._mappedport = value;
  }
  public resetMappedport() {
    this._mappedport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappedportInput() {
    return this._mappedport;
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

  // portforward - computed: true, optional: true, required: false
  private _portforward?: string; 
  public get portforward() {
    return this.getStringAttribute('portforward');
  }
  public set portforward(value: string) {
    this._portforward = value;
  }
  public resetPortforward() {
    this._portforward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portforwardInput() {
    return this._portforward;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      extintf: cdktf.stringToTerraform(this._extintf),
      extip: cdktf.stringToTerraform(this._extip),
      extport: cdktf.stringToTerraform(this._extport),
      id: cdktf.stringToTerraform(this._id),
      mappedip: cdktf.listMapper(cdktf.stringToTerraform, false)(this._mappedip),
      mappedport: cdktf.stringToTerraform(this._mappedport),
      name: cdktf.stringToTerraform(this._name),
      portforward: cdktf.stringToTerraform(this._portforward),
      protocol: cdktf.stringToTerraform(this._protocol),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extintf: {
        value: cdktf.stringToHclTerraform(this._extintf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extip: {
        value: cdktf.stringToHclTerraform(this._extip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extport: {
        value: cdktf.stringToHclTerraform(this._extport),
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
      mappedip: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._mappedip),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      mappedport: {
        value: cdktf.stringToHclTerraform(this._mappedport),
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
      portforward: {
        value: cdktf.stringToHclTerraform(this._portforward),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
