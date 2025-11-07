// https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/email_forwarding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EmailForwardingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Forwards to email addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/email_forwarding#destinations EmailForwarding#destinations}
  */
  readonly destinations: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/email_forwarding#id EmailForwarding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Account alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/email_forwarding#source EmailForwarding#source}
  */
  readonly source: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/email_forwarding gandi_email_forwarding}
*/
export class EmailForwarding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gandi_email_forwarding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EmailForwarding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EmailForwarding to import
  * @param importFromId The id of the existing EmailForwarding that should be imported. Refer to the {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/email_forwarding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EmailForwarding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gandi_email_forwarding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/email_forwarding gandi_email_forwarding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EmailForwardingConfig
  */
  public constructor(scope: Construct, id: string, config: EmailForwardingConfig) {
    super(scope, id, {
      terraformResourceType: 'gandi_email_forwarding',
      terraformGeneratorMetadata: {
        providerName: 'gandi',
        providerVersion: '2.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._destinations = config.destinations;
    this._id = config.id;
    this._source = config.source;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // destinations - computed: false, optional: false, required: true
  private _destinations?: string[]; 
  public get destinations() {
    return this.getListAttribute('destinations');
  }
  public set destinations(value: string[]) {
    this._destinations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations;
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

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      destinations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._destinations),
      id: cdktf.stringToTerraform(this._id),
      source: cdktf.stringToTerraform(this._source),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      destinations: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._destinations),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
