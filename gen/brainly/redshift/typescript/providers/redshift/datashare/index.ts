// https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/resources/datashare
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatashareConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/resources/datashare#id Datashare#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the datashare.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/resources/datashare#name Datashare#name}
  */
  readonly name: string;
  /**
  * The user who owns the datashare.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/resources/datashare#owner Datashare#owner}
  */
  readonly owner?: string;
  /**
  * Specifies whether the datashare can be shared to clusters that are publicly accessible. Default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/resources/datashare#publicly_accessible Datashare#publicly_accessible}
  */
  readonly publiclyAccessible?: boolean | cdktf.IResolvable;
  /**
  * Defines which schemas are exposed to the data share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/resources/datashare#schemas Datashare#schemas}
  */
  readonly schemas?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/resources/datashare redshift_datashare}
*/
export class Datashare extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "redshift_datashare";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Datashare resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Datashare to import
  * @param importFromId The id of the existing Datashare that should be imported. Refer to the {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/resources/datashare#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Datashare to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "redshift_datashare", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/resources/datashare redshift_datashare} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatashareConfig
  */
  public constructor(scope: Construct, id: string, config: DatashareConfig) {
    super(scope, id, {
      terraformResourceType: 'redshift_datashare',
      terraformGeneratorMetadata: {
        providerName: 'redshift',
        providerVersion: '1.1.0'
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
    this._owner = config.owner;
    this._publiclyAccessible = config.publiclyAccessible;
    this._schemas = config.schemas;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
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

  // owner - computed: true, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // producer_account - computed: true, optional: false, required: false
  public get producerAccount() {
    return this.getStringAttribute('producer_account');
  }

  // producer_namespace - computed: true, optional: false, required: false
  public get producerNamespace() {
    return this.getStringAttribute('producer_namespace');
  }

  // publicly_accessible - computed: false, optional: true, required: false
  private _publiclyAccessible?: boolean | cdktf.IResolvable; 
  public get publiclyAccessible() {
    return this.getBooleanAttribute('publicly_accessible');
  }
  public set publiclyAccessible(value: boolean | cdktf.IResolvable) {
    this._publiclyAccessible = value;
  }
  public resetPubliclyAccessible() {
    this._publiclyAccessible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publiclyAccessibleInput() {
    return this._publiclyAccessible;
  }

  // schemas - computed: false, optional: true, required: false
  private _schemas?: string[]; 
  public get schemas() {
    return cdktf.Fn.tolist(this.getListAttribute('schemas'));
  }
  public set schemas(value: string[]) {
    this._schemas = value;
  }
  public resetSchemas() {
    this._schemas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemasInput() {
    return this._schemas;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      owner: cdktf.stringToTerraform(this._owner),
      publicly_accessible: cdktf.booleanToTerraform(this._publiclyAccessible),
      schemas: cdktf.listMapper(cdktf.stringToTerraform, false)(this._schemas),
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
      owner: {
        value: cdktf.stringToHclTerraform(this._owner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      publicly_accessible: {
        value: cdktf.booleanToHclTerraform(this._publiclyAccessible),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      schemas: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._schemas),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
