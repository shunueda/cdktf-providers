// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/aclsettings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AclsettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access checks (chmod, chown). Options: unix, windows
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/aclsettings#access Aclsettings#access}
  */
  readonly access?: string;
  /**
  * Displayed mode bits. Options: approx, 777
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/aclsettings#calcmode Aclsettings#calcmode}
  */
  readonly calcmode?: string;
  /**
  * Approximate group mode bits when ACL exists. Options: group_aces, group_only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/aclsettings#calcmode_group Aclsettings#calcmode_group}
  */
  readonly calcmodeGroup?: string;
  /**
  * Approximate owner mode bits when ACL exists. Options: owner_aces, owner_only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/aclsettings#calcmode_owner Aclsettings#calcmode_owner}
  */
  readonly calcmodeOwner?: string;
  /**
  * Require traverse rights in order to traverse directories with existing ACLs. Options: require, ignore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/aclsettings#calcmode_traverse Aclsettings#calcmode_traverse}
  */
  readonly calcmodeTraverse?: string;
  /**
  * chmod on files with existing ACLs. Options: remove, replace, replace_users_and_groups, merge_with_ugo_priority, merge, deny, ignore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/aclsettings#chmod Aclsettings#chmod}
  */
  readonly chmod?: string;
  /**
  * chmod (007) on files with existing ACLs. Options: default, remove
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/aclsettings#chmod_007 Aclsettings#chmod_007}
  */
  readonly chmod007?: string;
  /**
  * ACLs created on directories by UNIX chmod. Options: yes, no
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/aclsettings#chmod_inheritable Aclsettings#chmod_inheritable}
  */
  readonly chmodInheritable?: string;
  /**
  * chown/chgrp on files with existing ACLs. Options: owner_group_and_acl, owner_group_only, ignore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/aclsettings#chown Aclsettings#chown}
  */
  readonly chown?: string;
  /**
  * ACL creation over SMB. Options: allow, disallow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/aclsettings#create_over_smb Aclsettings#create_over_smb}
  */
  readonly createOverSmb?: string;
  /**
  *  Read only DOS attribute. Options: deny_smb, deny_smb_and_nfs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/aclsettings#dos_attr Aclsettings#dos_attr}
  */
  readonly dosAttr?: string;
  /**
  * Group owner inheritance. Options: native, parent, creator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/aclsettings#group_owner_inheritance Aclsettings#group_owner_inheritance}
  */
  readonly groupOwnerInheritance?: string;
  /**
  * Treatment of 'rwx' permissions. Options: retain, full_control
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/aclsettings#rwx Aclsettings#rwx}
  */
  readonly rwx?: string;
  /**
  * Synthetic 'deny' ACEs. Options: none, remove
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/aclsettings#synthetic_denies Aclsettings#synthetic_denies}
  */
  readonly syntheticDenies?: string;
  /**
  * Access check (utimes). Options: only_owner, owner_and_write
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/aclsettings#utimes Aclsettings#utimes}
  */
  readonly utimes?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/aclsettings powerscale_aclsettings}
*/
export class Aclsettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_aclsettings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Aclsettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Aclsettings to import
  * @param importFromId The id of the existing Aclsettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/aclsettings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Aclsettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_aclsettings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/aclsettings powerscale_aclsettings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AclsettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AclsettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerscale_aclsettings',
      terraformGeneratorMetadata: {
        providerName: 'powerscale',
        providerVersion: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._access = config.access;
    this._calcmode = config.calcmode;
    this._calcmodeGroup = config.calcmodeGroup;
    this._calcmodeOwner = config.calcmodeOwner;
    this._calcmodeTraverse = config.calcmodeTraverse;
    this._chmod = config.chmod;
    this._chmod007 = config.chmod007;
    this._chmodInheritable = config.chmodInheritable;
    this._chown = config.chown;
    this._createOverSmb = config.createOverSmb;
    this._dosAttr = config.dosAttr;
    this._groupOwnerInheritance = config.groupOwnerInheritance;
    this._rwx = config.rwx;
    this._syntheticDenies = config.syntheticDenies;
    this._utimes = config.utimes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access - computed: true, optional: true, required: false
  private _access?: string; 
  public get access() {
    return this.getStringAttribute('access');
  }
  public set access(value: string) {
    this._access = value;
  }
  public resetAccess() {
    this._access = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }

  // calcmode - computed: true, optional: true, required: false
  private _calcmode?: string; 
  public get calcmode() {
    return this.getStringAttribute('calcmode');
  }
  public set calcmode(value: string) {
    this._calcmode = value;
  }
  public resetCalcmode() {
    this._calcmode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calcmodeInput() {
    return this._calcmode;
  }

  // calcmode_group - computed: true, optional: true, required: false
  private _calcmodeGroup?: string; 
  public get calcmodeGroup() {
    return this.getStringAttribute('calcmode_group');
  }
  public set calcmodeGroup(value: string) {
    this._calcmodeGroup = value;
  }
  public resetCalcmodeGroup() {
    this._calcmodeGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calcmodeGroupInput() {
    return this._calcmodeGroup;
  }

  // calcmode_owner - computed: true, optional: true, required: false
  private _calcmodeOwner?: string; 
  public get calcmodeOwner() {
    return this.getStringAttribute('calcmode_owner');
  }
  public set calcmodeOwner(value: string) {
    this._calcmodeOwner = value;
  }
  public resetCalcmodeOwner() {
    this._calcmodeOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calcmodeOwnerInput() {
    return this._calcmodeOwner;
  }

  // calcmode_traverse - computed: true, optional: true, required: false
  private _calcmodeTraverse?: string; 
  public get calcmodeTraverse() {
    return this.getStringAttribute('calcmode_traverse');
  }
  public set calcmodeTraverse(value: string) {
    this._calcmodeTraverse = value;
  }
  public resetCalcmodeTraverse() {
    this._calcmodeTraverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calcmodeTraverseInput() {
    return this._calcmodeTraverse;
  }

  // chmod - computed: true, optional: true, required: false
  private _chmod?: string; 
  public get chmod() {
    return this.getStringAttribute('chmod');
  }
  public set chmod(value: string) {
    this._chmod = value;
  }
  public resetChmod() {
    this._chmod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chmodInput() {
    return this._chmod;
  }

  // chmod_007 - computed: true, optional: true, required: false
  private _chmod007?: string; 
  public get chmod007() {
    return this.getStringAttribute('chmod_007');
  }
  public set chmod007(value: string) {
    this._chmod007 = value;
  }
  public resetChmod007() {
    this._chmod007 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chmod007Input() {
    return this._chmod007;
  }

  // chmod_inheritable - computed: true, optional: true, required: false
  private _chmodInheritable?: string; 
  public get chmodInheritable() {
    return this.getStringAttribute('chmod_inheritable');
  }
  public set chmodInheritable(value: string) {
    this._chmodInheritable = value;
  }
  public resetChmodInheritable() {
    this._chmodInheritable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chmodInheritableInput() {
    return this._chmodInheritable;
  }

  // chown - computed: true, optional: true, required: false
  private _chown?: string; 
  public get chown() {
    return this.getStringAttribute('chown');
  }
  public set chown(value: string) {
    this._chown = value;
  }
  public resetChown() {
    this._chown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chownInput() {
    return this._chown;
  }

  // create_over_smb - computed: true, optional: true, required: false
  private _createOverSmb?: string; 
  public get createOverSmb() {
    return this.getStringAttribute('create_over_smb');
  }
  public set createOverSmb(value: string) {
    this._createOverSmb = value;
  }
  public resetCreateOverSmb() {
    this._createOverSmb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createOverSmbInput() {
    return this._createOverSmb;
  }

  // dos_attr - computed: true, optional: true, required: false
  private _dosAttr?: string; 
  public get dosAttr() {
    return this.getStringAttribute('dos_attr');
  }
  public set dosAttr(value: string) {
    this._dosAttr = value;
  }
  public resetDosAttr() {
    this._dosAttr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dosAttrInput() {
    return this._dosAttr;
  }

  // group_owner_inheritance - computed: true, optional: true, required: false
  private _groupOwnerInheritance?: string; 
  public get groupOwnerInheritance() {
    return this.getStringAttribute('group_owner_inheritance');
  }
  public set groupOwnerInheritance(value: string) {
    this._groupOwnerInheritance = value;
  }
  public resetGroupOwnerInheritance() {
    this._groupOwnerInheritance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupOwnerInheritanceInput() {
    return this._groupOwnerInheritance;
  }

  // rwx - computed: true, optional: true, required: false
  private _rwx?: string; 
  public get rwx() {
    return this.getStringAttribute('rwx');
  }
  public set rwx(value: string) {
    this._rwx = value;
  }
  public resetRwx() {
    this._rwx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rwxInput() {
    return this._rwx;
  }

  // synthetic_denies - computed: true, optional: true, required: false
  private _syntheticDenies?: string; 
  public get syntheticDenies() {
    return this.getStringAttribute('synthetic_denies');
  }
  public set syntheticDenies(value: string) {
    this._syntheticDenies = value;
  }
  public resetSyntheticDenies() {
    this._syntheticDenies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syntheticDeniesInput() {
    return this._syntheticDenies;
  }

  // utimes - computed: true, optional: true, required: false
  private _utimes?: string; 
  public get utimes() {
    return this.getStringAttribute('utimes');
  }
  public set utimes(value: string) {
    this._utimes = value;
  }
  public resetUtimes() {
    this._utimes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utimesInput() {
    return this._utimes;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access: cdktf.stringToTerraform(this._access),
      calcmode: cdktf.stringToTerraform(this._calcmode),
      calcmode_group: cdktf.stringToTerraform(this._calcmodeGroup),
      calcmode_owner: cdktf.stringToTerraform(this._calcmodeOwner),
      calcmode_traverse: cdktf.stringToTerraform(this._calcmodeTraverse),
      chmod: cdktf.stringToTerraform(this._chmod),
      chmod_007: cdktf.stringToTerraform(this._chmod007),
      chmod_inheritable: cdktf.stringToTerraform(this._chmodInheritable),
      chown: cdktf.stringToTerraform(this._chown),
      create_over_smb: cdktf.stringToTerraform(this._createOverSmb),
      dos_attr: cdktf.stringToTerraform(this._dosAttr),
      group_owner_inheritance: cdktf.stringToTerraform(this._groupOwnerInheritance),
      rwx: cdktf.stringToTerraform(this._rwx),
      synthetic_denies: cdktf.stringToTerraform(this._syntheticDenies),
      utimes: cdktf.stringToTerraform(this._utimes),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access: {
        value: cdktf.stringToHclTerraform(this._access),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      calcmode: {
        value: cdktf.stringToHclTerraform(this._calcmode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      calcmode_group: {
        value: cdktf.stringToHclTerraform(this._calcmodeGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      calcmode_owner: {
        value: cdktf.stringToHclTerraform(this._calcmodeOwner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      calcmode_traverse: {
        value: cdktf.stringToHclTerraform(this._calcmodeTraverse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      chmod: {
        value: cdktf.stringToHclTerraform(this._chmod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      chmod_007: {
        value: cdktf.stringToHclTerraform(this._chmod007),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      chmod_inheritable: {
        value: cdktf.stringToHclTerraform(this._chmodInheritable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      chown: {
        value: cdktf.stringToHclTerraform(this._chown),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_over_smb: {
        value: cdktf.stringToHclTerraform(this._createOverSmb),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dos_attr: {
        value: cdktf.stringToHclTerraform(this._dosAttr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_owner_inheritance: {
        value: cdktf.stringToHclTerraform(this._groupOwnerInheritance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rwx: {
        value: cdktf.stringToHclTerraform(this._rwx),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      synthetic_denies: {
        value: cdktf.stringToHclTerraform(this._syntheticDenies),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      utimes: {
        value: cdktf.stringToHclTerraform(this._utimes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
