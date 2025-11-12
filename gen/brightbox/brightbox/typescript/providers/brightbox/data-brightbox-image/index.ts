// https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/data-sources/image
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBrightboxImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Image this image was derived from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/data-sources/image#ancestor_id DataBrightboxImage#ancestor_id}
  */
  readonly ancestorId?: string;
  /**
  * OS Architecture
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/data-sources/image#arch DataBrightboxImage#arch}
  */
  readonly arch?: string;
  /**
  * Does this image require a non-virtio VM shell
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/data-sources/image#compatibility_mode DataBrightboxImage#compatibility_mode}
  */
  readonly compatibilityMode?: boolean | cdktf.IResolvable;
  /**
  * A Description of the image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/data-sources/image#description DataBrightboxImage#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/data-sources/image#id DataBrightboxImage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The licence name for this image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/data-sources/image#licence_name DataBrightboxImage#licence_name}
  */
  readonly licenceName?: string;
  /**
  * The actual size of the data within this image in Megabytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/data-sources/image#min_ram DataBrightboxImage#min_ram}
  */
  readonly minRam?: number;
  /**
  * Select the most recent image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/data-sources/image#most_recent DataBrightboxImage#most_recent}
  */
  readonly mostRecent?: boolean | cdktf.IResolvable;
  /**
  * User Label for this image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/data-sources/image#name DataBrightboxImage#name}
  */
  readonly name?: string;
  /**
  * Is this image an official Brightbox provided one?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/data-sources/image#official DataBrightboxImage#official}
  */
  readonly official?: boolean | cdktf.IResolvable;
  /**
  * Account ID this image belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/data-sources/image#owner DataBrightboxImage#owner}
  */
  readonly owner?: string;
  /**
  * Is this image available to other customers?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/data-sources/image#public DataBrightboxImage#public}
  */
  readonly public?: boolean | cdktf.IResolvable;
  /**
  * Name of theSource for this image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/data-sources/image#source DataBrightboxImage#source}
  */
  readonly source?: string;
  /**
  * Source trigger for this image (manual or schedule)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/data-sources/image#source_trigger DataBrightboxImage#source_trigger}
  */
  readonly sourceTrigger?: string;
  /**
  * Source type for this image (upload or snapshot)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/data-sources/image#source_type DataBrightboxImage#source_type}
  */
  readonly sourceType?: string;
  /**
  * State of the image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/data-sources/image#status DataBrightboxImage#status}
  */
  readonly status?: string;
  /**
  * Username to use when logging into a server booted with this image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/data-sources/image#username DataBrightboxImage#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/data-sources/image brightbox_image}
*/
export class DataBrightboxImage extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "brightbox_image";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBrightboxImage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBrightboxImage to import
  * @param importFromId The id of the existing DataBrightboxImage that should be imported. Refer to the {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/data-sources/image#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBrightboxImage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "brightbox_image", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/data-sources/image brightbox_image} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBrightboxImageConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataBrightboxImageConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'brightbox_image',
      terraformGeneratorMetadata: {
        providerName: 'brightbox',
        providerVersion: '3.4.3',
        providerVersionConstraint: '3.4.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ancestorId = config.ancestorId;
    this._arch = config.arch;
    this._compatibilityMode = config.compatibilityMode;
    this._description = config.description;
    this._id = config.id;
    this._licenceName = config.licenceName;
    this._minRam = config.minRam;
    this._mostRecent = config.mostRecent;
    this._name = config.name;
    this._official = config.official;
    this._owner = config.owner;
    this._public = config.public;
    this._source = config.source;
    this._sourceTrigger = config.sourceTrigger;
    this._sourceType = config.sourceType;
    this._status = config.status;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ancestor_id - computed: true, optional: true, required: false
  private _ancestorId?: string; 
  public get ancestorId() {
    return this.getStringAttribute('ancestor_id');
  }
  public set ancestorId(value: string) {
    this._ancestorId = value;
  }
  public resetAncestorId() {
    this._ancestorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ancestorIdInput() {
    return this._ancestorId;
  }

  // arch - computed: true, optional: true, required: false
  private _arch?: string; 
  public get arch() {
    return this.getStringAttribute('arch');
  }
  public set arch(value: string) {
    this._arch = value;
  }
  public resetArch() {
    this._arch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archInput() {
    return this._arch;
  }

  // compatibility_mode - computed: true, optional: true, required: false
  private _compatibilityMode?: boolean | cdktf.IResolvable; 
  public get compatibilityMode() {
    return this.getBooleanAttribute('compatibility_mode');
  }
  public set compatibilityMode(value: boolean | cdktf.IResolvable) {
    this._compatibilityMode = value;
  }
  public resetCompatibilityMode() {
    this._compatibilityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compatibilityModeInput() {
    return this._compatibilityMode;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: true, required: false
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

  // disk_size - computed: true, optional: false, required: false
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
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

  // licence_name - computed: true, optional: true, required: false
  private _licenceName?: string; 
  public get licenceName() {
    return this.getStringAttribute('licence_name');
  }
  public set licenceName(value: string) {
    this._licenceName = value;
  }
  public resetLicenceName() {
    this._licenceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenceNameInput() {
    return this._licenceName;
  }

  // locked - computed: true, optional: false, required: false
  public get locked() {
    return this.getBooleanAttribute('locked');
  }

  // min_ram - computed: true, optional: true, required: false
  private _minRam?: number; 
  public get minRam() {
    return this.getNumberAttribute('min_ram');
  }
  public set minRam(value: number) {
    this._minRam = value;
  }
  public resetMinRam() {
    this._minRam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minRamInput() {
    return this._minRam;
  }

  // most_recent - computed: false, optional: true, required: false
  private _mostRecent?: boolean | cdktf.IResolvable; 
  public get mostRecent() {
    return this.getBooleanAttribute('most_recent');
  }
  public set mostRecent(value: boolean | cdktf.IResolvable) {
    this._mostRecent = value;
  }
  public resetMostRecent() {
    this._mostRecent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mostRecentInput() {
    return this._mostRecent;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // official - computed: true, optional: true, required: false
  private _official?: boolean | cdktf.IResolvable; 
  public get official() {
    return this.getBooleanAttribute('official');
  }
  public set official(value: boolean | cdktf.IResolvable) {
    this._official = value;
  }
  public resetOfficial() {
    this._official = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get officialInput() {
    return this._official;
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

  // public - computed: true, optional: true, required: false
  private _public?: boolean | cdktf.IResolvable; 
  public get public() {
    return this.getBooleanAttribute('public');
  }
  public set public(value: boolean | cdktf.IResolvable) {
    this._public = value;
  }
  public resetPublic() {
    this._public = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicInput() {
    return this._public;
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // source_trigger - computed: true, optional: true, required: false
  private _sourceTrigger?: string; 
  public get sourceTrigger() {
    return this.getStringAttribute('source_trigger');
  }
  public set sourceTrigger(value: string) {
    this._sourceTrigger = value;
  }
  public resetSourceTrigger() {
    this._sourceTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTriggerInput() {
    return this._sourceTrigger;
  }

  // source_type - computed: true, optional: true, required: false
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  public resetSourceType() {
    this._sourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // virtual_size - computed: true, optional: false, required: false
  public get virtualSize() {
    return this.getNumberAttribute('virtual_size');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ancestor_id: cdktf.stringToTerraform(this._ancestorId),
      arch: cdktf.stringToTerraform(this._arch),
      compatibility_mode: cdktf.booleanToTerraform(this._compatibilityMode),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      licence_name: cdktf.stringToTerraform(this._licenceName),
      min_ram: cdktf.numberToTerraform(this._minRam),
      most_recent: cdktf.booleanToTerraform(this._mostRecent),
      name: cdktf.stringToTerraform(this._name),
      official: cdktf.booleanToTerraform(this._official),
      owner: cdktf.stringToTerraform(this._owner),
      public: cdktf.booleanToTerraform(this._public),
      source: cdktf.stringToTerraform(this._source),
      source_trigger: cdktf.stringToTerraform(this._sourceTrigger),
      source_type: cdktf.stringToTerraform(this._sourceType),
      status: cdktf.stringToTerraform(this._status),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ancestor_id: {
        value: cdktf.stringToHclTerraform(this._ancestorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arch: {
        value: cdktf.stringToHclTerraform(this._arch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compatibility_mode: {
        value: cdktf.booleanToHclTerraform(this._compatibilityMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      licence_name: {
        value: cdktf.stringToHclTerraform(this._licenceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_ram: {
        value: cdktf.numberToHclTerraform(this._minRam),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      most_recent: {
        value: cdktf.booleanToHclTerraform(this._mostRecent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      official: {
        value: cdktf.booleanToHclTerraform(this._official),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      owner: {
        value: cdktf.stringToHclTerraform(this._owner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public: {
        value: cdktf.booleanToHclTerraform(this._public),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_trigger: {
        value: cdktf.stringToHclTerraform(this._sourceTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_type: {
        value: cdktf.stringToHclTerraform(this._sourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
