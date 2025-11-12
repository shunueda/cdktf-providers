// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lsngroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LsngroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lsngroup#allocpolicy Lsngroup#allocpolicy}
  */
  readonly allocpolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lsngroup#clientname Lsngroup#clientname}
  */
  readonly clientname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lsngroup#ftp Lsngroup#ftp}
  */
  readonly ftp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lsngroup#ftpcm Lsngroup#ftpcm}
  */
  readonly ftpcm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lsngroup#groupname Lsngroup#groupname}
  */
  readonly groupname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lsngroup#id Lsngroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lsngroup#ip6profile Lsngroup#ip6profile}
  */
  readonly ip6Profile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lsngroup#logging Lsngroup#logging}
  */
  readonly logging?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lsngroup#nattype Lsngroup#nattype}
  */
  readonly nattype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lsngroup#portblocksize Lsngroup#portblocksize}
  */
  readonly portblocksize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lsngroup#pptp Lsngroup#pptp}
  */
  readonly pptp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lsngroup#rtspalg Lsngroup#rtspalg}
  */
  readonly rtspalg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lsngroup#sessionlogging Lsngroup#sessionlogging}
  */
  readonly sessionlogging?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lsngroup#sessionsync Lsngroup#sessionsync}
  */
  readonly sessionsync?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lsngroup#sipalg Lsngroup#sipalg}
  */
  readonly sipalg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lsngroup#snmptraplimit Lsngroup#snmptraplimit}
  */
  readonly snmptraplimit?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lsngroup citrixadc_lsngroup}
*/
export class Lsngroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_lsngroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Lsngroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Lsngroup to import
  * @param importFromId The id of the existing Lsngroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lsngroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Lsngroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_lsngroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lsngroup citrixadc_lsngroup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LsngroupConfig
  */
  public constructor(scope: Construct, id: string, config: LsngroupConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_lsngroup',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.0.0',
        providerVersionConstraint: '2.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allocpolicy = config.allocpolicy;
    this._clientname = config.clientname;
    this._ftp = config.ftp;
    this._ftpcm = config.ftpcm;
    this._groupname = config.groupname;
    this._id = config.id;
    this._ip6Profile = config.ip6Profile;
    this._logging = config.logging;
    this._nattype = config.nattype;
    this._portblocksize = config.portblocksize;
    this._pptp = config.pptp;
    this._rtspalg = config.rtspalg;
    this._sessionlogging = config.sessionlogging;
    this._sessionsync = config.sessionsync;
    this._sipalg = config.sipalg;
    this._snmptraplimit = config.snmptraplimit;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocpolicy - computed: false, optional: true, required: false
  private _allocpolicy?: string; 
  public get allocpolicy() {
    return this.getStringAttribute('allocpolicy');
  }
  public set allocpolicy(value: string) {
    this._allocpolicy = value;
  }
  public resetAllocpolicy() {
    this._allocpolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocpolicyInput() {
    return this._allocpolicy;
  }

  // clientname - computed: false, optional: false, required: true
  private _clientname?: string; 
  public get clientname() {
    return this.getStringAttribute('clientname');
  }
  public set clientname(value: string) {
    this._clientname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientnameInput() {
    return this._clientname;
  }

  // ftp - computed: true, optional: true, required: false
  private _ftp?: string; 
  public get ftp() {
    return this.getStringAttribute('ftp');
  }
  public set ftp(value: string) {
    this._ftp = value;
  }
  public resetFtp() {
    this._ftp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpInput() {
    return this._ftp;
  }

  // ftpcm - computed: true, optional: true, required: false
  private _ftpcm?: string; 
  public get ftpcm() {
    return this.getStringAttribute('ftpcm');
  }
  public set ftpcm(value: string) {
    this._ftpcm = value;
  }
  public resetFtpcm() {
    this._ftpcm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpcmInput() {
    return this._ftpcm;
  }

  // groupname - computed: false, optional: false, required: true
  private _groupname?: string; 
  public get groupname() {
    return this.getStringAttribute('groupname');
  }
  public set groupname(value: string) {
    this._groupname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupnameInput() {
    return this._groupname;
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

  // ip6profile - computed: false, optional: true, required: false
  private _ip6Profile?: string; 
  public get ip6Profile() {
    return this.getStringAttribute('ip6profile');
  }
  public set ip6Profile(value: string) {
    this._ip6Profile = value;
  }
  public resetIp6Profile() {
    this._ip6Profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6ProfileInput() {
    return this._ip6Profile;
  }

  // logging - computed: true, optional: true, required: false
  private _logging?: string; 
  public get logging() {
    return this.getStringAttribute('logging');
  }
  public set logging(value: string) {
    this._logging = value;
  }
  public resetLogging() {
    this._logging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging;
  }

  // nattype - computed: false, optional: true, required: false
  private _nattype?: string; 
  public get nattype() {
    return this.getStringAttribute('nattype');
  }
  public set nattype(value: string) {
    this._nattype = value;
  }
  public resetNattype() {
    this._nattype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nattypeInput() {
    return this._nattype;
  }

  // portblocksize - computed: true, optional: true, required: false
  private _portblocksize?: number; 
  public get portblocksize() {
    return this.getNumberAttribute('portblocksize');
  }
  public set portblocksize(value: number) {
    this._portblocksize = value;
  }
  public resetPortblocksize() {
    this._portblocksize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portblocksizeInput() {
    return this._portblocksize;
  }

  // pptp - computed: true, optional: true, required: false
  private _pptp?: string; 
  public get pptp() {
    return this.getStringAttribute('pptp');
  }
  public set pptp(value: string) {
    this._pptp = value;
  }
  public resetPptp() {
    this._pptp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pptpInput() {
    return this._pptp;
  }

  // rtspalg - computed: true, optional: true, required: false
  private _rtspalg?: string; 
  public get rtspalg() {
    return this.getStringAttribute('rtspalg');
  }
  public set rtspalg(value: string) {
    this._rtspalg = value;
  }
  public resetRtspalg() {
    this._rtspalg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtspalgInput() {
    return this._rtspalg;
  }

  // sessionlogging - computed: true, optional: true, required: false
  private _sessionlogging?: string; 
  public get sessionlogging() {
    return this.getStringAttribute('sessionlogging');
  }
  public set sessionlogging(value: string) {
    this._sessionlogging = value;
  }
  public resetSessionlogging() {
    this._sessionlogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionloggingInput() {
    return this._sessionlogging;
  }

  // sessionsync - computed: true, optional: true, required: false
  private _sessionsync?: string; 
  public get sessionsync() {
    return this.getStringAttribute('sessionsync');
  }
  public set sessionsync(value: string) {
    this._sessionsync = value;
  }
  public resetSessionsync() {
    this._sessionsync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionsyncInput() {
    return this._sessionsync;
  }

  // sipalg - computed: true, optional: true, required: false
  private _sipalg?: string; 
  public get sipalg() {
    return this.getStringAttribute('sipalg');
  }
  public set sipalg(value: string) {
    this._sipalg = value;
  }
  public resetSipalg() {
    this._sipalg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipalgInput() {
    return this._sipalg;
  }

  // snmptraplimit - computed: true, optional: true, required: false
  private _snmptraplimit?: string; 
  public get snmptraplimit() {
    return this.getStringAttribute('snmptraplimit');
  }
  public set snmptraplimit(value: string) {
    this._snmptraplimit = value;
  }
  public resetSnmptraplimit() {
    this._snmptraplimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmptraplimitInput() {
    return this._snmptraplimit;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allocpolicy: cdktf.stringToTerraform(this._allocpolicy),
      clientname: cdktf.stringToTerraform(this._clientname),
      ftp: cdktf.stringToTerraform(this._ftp),
      ftpcm: cdktf.stringToTerraform(this._ftpcm),
      groupname: cdktf.stringToTerraform(this._groupname),
      id: cdktf.stringToTerraform(this._id),
      ip6profile: cdktf.stringToTerraform(this._ip6Profile),
      logging: cdktf.stringToTerraform(this._logging),
      nattype: cdktf.stringToTerraform(this._nattype),
      portblocksize: cdktf.numberToTerraform(this._portblocksize),
      pptp: cdktf.stringToTerraform(this._pptp),
      rtspalg: cdktf.stringToTerraform(this._rtspalg),
      sessionlogging: cdktf.stringToTerraform(this._sessionlogging),
      sessionsync: cdktf.stringToTerraform(this._sessionsync),
      sipalg: cdktf.stringToTerraform(this._sipalg),
      snmptraplimit: cdktf.stringToTerraform(this._snmptraplimit),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allocpolicy: {
        value: cdktf.stringToHclTerraform(this._allocpolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clientname: {
        value: cdktf.stringToHclTerraform(this._clientname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ftp: {
        value: cdktf.stringToHclTerraform(this._ftp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ftpcm: {
        value: cdktf.stringToHclTerraform(this._ftpcm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      groupname: {
        value: cdktf.stringToHclTerraform(this._groupname),
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
      ip6profile: {
        value: cdktf.stringToHclTerraform(this._ip6Profile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logging: {
        value: cdktf.stringToHclTerraform(this._logging),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nattype: {
        value: cdktf.stringToHclTerraform(this._nattype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      portblocksize: {
        value: cdktf.numberToHclTerraform(this._portblocksize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pptp: {
        value: cdktf.stringToHclTerraform(this._pptp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rtspalg: {
        value: cdktf.stringToHclTerraform(this._rtspalg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sessionlogging: {
        value: cdktf.stringToHclTerraform(this._sessionlogging),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sessionsync: {
        value: cdktf.stringToHclTerraform(this._sessionsync),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sipalg: {
        value: cdktf.stringToHclTerraform(this._sipalg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmptraplimit: {
        value: cdktf.stringToHclTerraform(this._snmptraplimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
