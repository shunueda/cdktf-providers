// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/hanode
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HanodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/hanode#deadinterval Hanode#deadinterval}
  */
  readonly deadinterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/hanode#failsafe Hanode#failsafe}
  */
  readonly failsafe?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/hanode#hanode_id Hanode#hanode_id}
  */
  readonly hanodeId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/hanode#haprop Hanode#haprop}
  */
  readonly haprop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/hanode#hastatus Hanode#hastatus}
  */
  readonly hastatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/hanode#hasync Hanode#hasync}
  */
  readonly hasync?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/hanode#hellointerval Hanode#hellointerval}
  */
  readonly hellointerval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/hanode#id Hanode#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/hanode#inc Hanode#inc}
  */
  readonly inc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/hanode#ipaddress Hanode#ipaddress}
  */
  readonly ipaddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/hanode#maxflips Hanode#maxflips}
  */
  readonly maxflips?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/hanode#maxfliptime Hanode#maxfliptime}
  */
  readonly maxfliptime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/hanode#syncstatusstrictmode Hanode#syncstatusstrictmode}
  */
  readonly syncstatusstrictmode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/hanode#syncvlan Hanode#syncvlan}
  */
  readonly syncvlan?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/hanode citrixadc_hanode}
*/
export class Hanode extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_hanode";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Hanode resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Hanode to import
  * @param importFromId The id of the existing Hanode that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/hanode#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Hanode to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_hanode", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/hanode citrixadc_hanode} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HanodeConfig
  */
  public constructor(scope: Construct, id: string, config: HanodeConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_hanode',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '1.45.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deadinterval = config.deadinterval;
    this._failsafe = config.failsafe;
    this._hanodeId = config.hanodeId;
    this._haprop = config.haprop;
    this._hastatus = config.hastatus;
    this._hasync = config.hasync;
    this._hellointerval = config.hellointerval;
    this._id = config.id;
    this._inc = config.inc;
    this._ipaddress = config.ipaddress;
    this._maxflips = config.maxflips;
    this._maxfliptime = config.maxfliptime;
    this._syncstatusstrictmode = config.syncstatusstrictmode;
    this._syncvlan = config.syncvlan;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deadinterval - computed: true, optional: true, required: false
  private _deadinterval?: number; 
  public get deadinterval() {
    return this.getNumberAttribute('deadinterval');
  }
  public set deadinterval(value: number) {
    this._deadinterval = value;
  }
  public resetDeadinterval() {
    this._deadinterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadintervalInput() {
    return this._deadinterval;
  }

  // failsafe - computed: true, optional: true, required: false
  private _failsafe?: string; 
  public get failsafe() {
    return this.getStringAttribute('failsafe');
  }
  public set failsafe(value: string) {
    this._failsafe = value;
  }
  public resetFailsafe() {
    this._failsafe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failsafeInput() {
    return this._failsafe;
  }

  // hanode_id - computed: false, optional: false, required: true
  private _hanodeId?: number; 
  public get hanodeId() {
    return this.getNumberAttribute('hanode_id');
  }
  public set hanodeId(value: number) {
    this._hanodeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hanodeIdInput() {
    return this._hanodeId;
  }

  // haprop - computed: true, optional: true, required: false
  private _haprop?: string; 
  public get haprop() {
    return this.getStringAttribute('haprop');
  }
  public set haprop(value: string) {
    this._haprop = value;
  }
  public resetHaprop() {
    this._haprop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hapropInput() {
    return this._haprop;
  }

  // hastatus - computed: true, optional: true, required: false
  private _hastatus?: string; 
  public get hastatus() {
    return this.getStringAttribute('hastatus');
  }
  public set hastatus(value: string) {
    this._hastatus = value;
  }
  public resetHastatus() {
    this._hastatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hastatusInput() {
    return this._hastatus;
  }

  // hasync - computed: true, optional: true, required: false
  private _hasync?: string; 
  public get hasync() {
    return this.getStringAttribute('hasync');
  }
  public set hasync(value: string) {
    this._hasync = value;
  }
  public resetHasync() {
    this._hasync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasyncInput() {
    return this._hasync;
  }

  // hellointerval - computed: true, optional: true, required: false
  private _hellointerval?: number; 
  public get hellointerval() {
    return this.getNumberAttribute('hellointerval');
  }
  public set hellointerval(value: number) {
    this._hellointerval = value;
  }
  public resetHellointerval() {
    this._hellointerval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hellointervalInput() {
    return this._hellointerval;
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

  // inc - computed: true, optional: true, required: false
  private _inc?: string; 
  public get inc() {
    return this.getStringAttribute('inc');
  }
  public set inc(value: string) {
    this._inc = value;
  }
  public resetInc() {
    this._inc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incInput() {
    return this._inc;
  }

  // ipaddress - computed: false, optional: true, required: false
  private _ipaddress?: string; 
  public get ipaddress() {
    return this.getStringAttribute('ipaddress');
  }
  public set ipaddress(value: string) {
    this._ipaddress = value;
  }
  public resetIpaddress() {
    this._ipaddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipaddressInput() {
    return this._ipaddress;
  }

  // maxflips - computed: true, optional: true, required: false
  private _maxflips?: number; 
  public get maxflips() {
    return this.getNumberAttribute('maxflips');
  }
  public set maxflips(value: number) {
    this._maxflips = value;
  }
  public resetMaxflips() {
    this._maxflips = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxflipsInput() {
    return this._maxflips;
  }

  // maxfliptime - computed: true, optional: true, required: false
  private _maxfliptime?: number; 
  public get maxfliptime() {
    return this.getNumberAttribute('maxfliptime');
  }
  public set maxfliptime(value: number) {
    this._maxfliptime = value;
  }
  public resetMaxfliptime() {
    this._maxfliptime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxfliptimeInput() {
    return this._maxfliptime;
  }

  // syncstatusstrictmode - computed: true, optional: true, required: false
  private _syncstatusstrictmode?: string; 
  public get syncstatusstrictmode() {
    return this.getStringAttribute('syncstatusstrictmode');
  }
  public set syncstatusstrictmode(value: string) {
    this._syncstatusstrictmode = value;
  }
  public resetSyncstatusstrictmode() {
    this._syncstatusstrictmode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncstatusstrictmodeInput() {
    return this._syncstatusstrictmode;
  }

  // syncvlan - computed: true, optional: true, required: false
  private _syncvlan?: number; 
  public get syncvlan() {
    return this.getNumberAttribute('syncvlan');
  }
  public set syncvlan(value: number) {
    this._syncvlan = value;
  }
  public resetSyncvlan() {
    this._syncvlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncvlanInput() {
    return this._syncvlan;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deadinterval: cdktf.numberToTerraform(this._deadinterval),
      failsafe: cdktf.stringToTerraform(this._failsafe),
      hanode_id: cdktf.numberToTerraform(this._hanodeId),
      haprop: cdktf.stringToTerraform(this._haprop),
      hastatus: cdktf.stringToTerraform(this._hastatus),
      hasync: cdktf.stringToTerraform(this._hasync),
      hellointerval: cdktf.numberToTerraform(this._hellointerval),
      id: cdktf.stringToTerraform(this._id),
      inc: cdktf.stringToTerraform(this._inc),
      ipaddress: cdktf.stringToTerraform(this._ipaddress),
      maxflips: cdktf.numberToTerraform(this._maxflips),
      maxfliptime: cdktf.numberToTerraform(this._maxfliptime),
      syncstatusstrictmode: cdktf.stringToTerraform(this._syncstatusstrictmode),
      syncvlan: cdktf.numberToTerraform(this._syncvlan),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deadinterval: {
        value: cdktf.numberToHclTerraform(this._deadinterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      failsafe: {
        value: cdktf.stringToHclTerraform(this._failsafe),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hanode_id: {
        value: cdktf.numberToHclTerraform(this._hanodeId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      haprop: {
        value: cdktf.stringToHclTerraform(this._haprop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hastatus: {
        value: cdktf.stringToHclTerraform(this._hastatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hasync: {
        value: cdktf.stringToHclTerraform(this._hasync),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hellointerval: {
        value: cdktf.numberToHclTerraform(this._hellointerval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inc: {
        value: cdktf.stringToHclTerraform(this._inc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipaddress: {
        value: cdktf.stringToHclTerraform(this._ipaddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maxflips: {
        value: cdktf.numberToHclTerraform(this._maxflips),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maxfliptime: {
        value: cdktf.numberToHclTerraform(this._maxfliptime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      syncstatusstrictmode: {
        value: cdktf.stringToHclTerraform(this._syncstatusstrictmode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      syncvlan: {
        value: cdktf.numberToHclTerraform(this._syncvlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
