// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/aclsettings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowerscaleAclsettingsConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/aclsettings powerscale_aclsettings}
*/
export class DataPowerscaleAclsettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_aclsettings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowerscaleAclsettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowerscaleAclsettings to import
  * @param importFromId The id of the existing DataPowerscaleAclsettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/aclsettings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowerscaleAclsettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_aclsettings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/aclsettings powerscale_aclsettings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowerscaleAclsettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPowerscaleAclsettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerscale_aclsettings',
      terraformGeneratorMetadata: {
        providerName: 'powerscale',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access - computed: true, optional: false, required: false
  public get access() {
    return this.getStringAttribute('access');
  }

  // calcmode - computed: true, optional: false, required: false
  public get calcmode() {
    return this.getStringAttribute('calcmode');
  }

  // calcmode_group - computed: true, optional: false, required: false
  public get calcmodeGroup() {
    return this.getStringAttribute('calcmode_group');
  }

  // calcmode_owner - computed: true, optional: false, required: false
  public get calcmodeOwner() {
    return this.getStringAttribute('calcmode_owner');
  }

  // calcmode_traverse - computed: true, optional: false, required: false
  public get calcmodeTraverse() {
    return this.getStringAttribute('calcmode_traverse');
  }

  // chmod - computed: true, optional: false, required: false
  public get chmod() {
    return this.getStringAttribute('chmod');
  }

  // chmod_007 - computed: true, optional: false, required: false
  public get chmod007() {
    return this.getStringAttribute('chmod_007');
  }

  // chmod_inheritable - computed: true, optional: false, required: false
  public get chmodInheritable() {
    return this.getStringAttribute('chmod_inheritable');
  }

  // chown - computed: true, optional: false, required: false
  public get chown() {
    return this.getStringAttribute('chown');
  }

  // create_over_smb - computed: true, optional: false, required: false
  public get createOverSmb() {
    return this.getStringAttribute('create_over_smb');
  }

  // dos_attr - computed: true, optional: false, required: false
  public get dosAttr() {
    return this.getStringAttribute('dos_attr');
  }

  // group_owner_inheritance - computed: true, optional: false, required: false
  public get groupOwnerInheritance() {
    return this.getStringAttribute('group_owner_inheritance');
  }

  // rwx - computed: true, optional: false, required: false
  public get rwx() {
    return this.getStringAttribute('rwx');
  }

  // synthetic_denies - computed: true, optional: false, required: false
  public get syntheticDenies() {
    return this.getStringAttribute('synthetic_denies');
  }

  // utimes - computed: true, optional: false, required: false
  public get utimes() {
    return this.getStringAttribute('utimes');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
