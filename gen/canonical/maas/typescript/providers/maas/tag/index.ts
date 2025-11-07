// https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/tag
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TagConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description of what the the tag will be used for in natural language.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/tag#comment Tag#comment}
  */
  readonly comment?: string;
  /**
  * An XPATH query that is evaluated against the hardware_details stored for all nodes. (i.e. the output of ``lshw -xml``)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/tag#definition Tag#definition}
  */
  readonly definition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/tag#id Tag#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Nodes associated with this tag will add this string to their kernel options when booting. The value overrides the global ``kernel_opts`` setting. If more than one tag is associated with a node, command line will be concatenated from all associated tags, in alphabetic tag name order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/tag#kernel_opts Tag#kernel_opts}
  */
  readonly kernelOpts?: string;
  /**
  * List of MAAS machines' identifiers (system ID, hostname, or FQDN) that will be tagged with the new tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/tag#machines Tag#machines}
  */
  readonly machines?: string[];
  /**
  * The new tag name. Because the name will be used in urls, it should be short.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/tag#name Tag#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/tag maas_tag}
*/
export class Tag extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "maas_tag";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Tag resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Tag to import
  * @param importFromId The id of the existing Tag that should be imported. Refer to the {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/tag#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Tag to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "maas_tag", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/tag maas_tag} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TagConfig
  */
  public constructor(scope: Construct, id: string, config: TagConfig) {
    super(scope, id, {
      terraformResourceType: 'maas_tag',
      terraformGeneratorMetadata: {
        providerName: 'maas',
        providerVersion: '2.6.0'
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
    this._definition = config.definition;
    this._id = config.id;
    this._kernelOpts = config.kernelOpts;
    this._machines = config.machines;
    this._name = config.name;
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

  // definition - computed: false, optional: true, required: false
  private _definition?: string; 
  public get definition() {
    return this.getStringAttribute('definition');
  }
  public set definition(value: string) {
    this._definition = value;
  }
  public resetDefinition() {
    this._definition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition;
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

  // kernel_opts - computed: false, optional: true, required: false
  private _kernelOpts?: string; 
  public get kernelOpts() {
    return this.getStringAttribute('kernel_opts');
  }
  public set kernelOpts(value: string) {
    this._kernelOpts = value;
  }
  public resetKernelOpts() {
    this._kernelOpts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelOptsInput() {
    return this._kernelOpts;
  }

  // machines - computed: false, optional: true, required: false
  private _machines?: string[]; 
  public get machines() {
    return cdktf.Fn.tolist(this.getListAttribute('machines'));
  }
  public set machines(value: string[]) {
    this._machines = value;
  }
  public resetMachines() {
    this._machines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machinesInput() {
    return this._machines;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      definition: cdktf.stringToTerraform(this._definition),
      id: cdktf.stringToTerraform(this._id),
      kernel_opts: cdktf.stringToTerraform(this._kernelOpts),
      machines: cdktf.listMapper(cdktf.stringToTerraform, false)(this._machines),
      name: cdktf.stringToTerraform(this._name),
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
      definition: {
        value: cdktf.stringToHclTerraform(this._definition),
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
      kernel_opts: {
        value: cdktf.stringToHclTerraform(this._kernelOpts),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      machines: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._machines),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
