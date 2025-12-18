// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/l3param
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface L3ParamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/l3param#acllogtime L3Param#acllogtime}
  */
  readonly acllogtime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/l3param#allowclasseipv4 L3Param#allowclasseipv4}
  */
  readonly allowclasseipv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/l3param#dropdfflag L3Param#dropdfflag}
  */
  readonly dropdfflag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/l3param#dropipfragments L3Param#dropipfragments}
  */
  readonly dropipfragments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/l3param#dynamicrouting L3Param#dynamicrouting}
  */
  readonly dynamicrouting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/l3param#externalloopback L3Param#externalloopback}
  */
  readonly externalloopback?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/l3param#forwardicmpfragments L3Param#forwardicmpfragments}
  */
  readonly forwardicmpfragments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/l3param#icmpgenratethreshold L3Param#icmpgenratethreshold}
  */
  readonly icmpgenratethreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/l3param#id L3Param#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/l3param#implicitaclallow L3Param#implicitaclallow}
  */
  readonly implicitaclallow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/l3param#implicitpbr L3Param#implicitpbr}
  */
  readonly implicitpbr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/l3param#ipv6dynamicrouting L3Param#ipv6dynamicrouting}
  */
  readonly ipv6Dynamicrouting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/l3param#miproundrobin L3Param#miproundrobin}
  */
  readonly miproundrobin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/l3param#overridernat L3Param#overridernat}
  */
  readonly overridernat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/l3param#srcnat L3Param#srcnat}
  */
  readonly srcnat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/l3param#tnlpmtuwoconn L3Param#tnlpmtuwoconn}
  */
  readonly tnlpmtuwoconn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/l3param#usipserverstraypkt L3Param#usipserverstraypkt}
  */
  readonly usipserverstraypkt?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/l3param citrixadc_l3param}
*/
export class L3Param extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_l3param";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a L3Param resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the L3Param to import
  * @param importFromId The id of the existing L3Param that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/l3param#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the L3Param to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_l3param", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/l3param citrixadc_l3param} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options L3ParamConfig = {}
  */
  public constructor(scope: Construct, id: string, config: L3ParamConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_l3param',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.1.0',
        providerVersionConstraint: '2.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acllogtime = config.acllogtime;
    this._allowclasseipv4 = config.allowclasseipv4;
    this._dropdfflag = config.dropdfflag;
    this._dropipfragments = config.dropipfragments;
    this._dynamicrouting = config.dynamicrouting;
    this._externalloopback = config.externalloopback;
    this._forwardicmpfragments = config.forwardicmpfragments;
    this._icmpgenratethreshold = config.icmpgenratethreshold;
    this._id = config.id;
    this._implicitaclallow = config.implicitaclallow;
    this._implicitpbr = config.implicitpbr;
    this._ipv6Dynamicrouting = config.ipv6Dynamicrouting;
    this._miproundrobin = config.miproundrobin;
    this._overridernat = config.overridernat;
    this._srcnat = config.srcnat;
    this._tnlpmtuwoconn = config.tnlpmtuwoconn;
    this._usipserverstraypkt = config.usipserverstraypkt;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acllogtime - computed: true, optional: true, required: false
  private _acllogtime?: number; 
  public get acllogtime() {
    return this.getNumberAttribute('acllogtime');
  }
  public set acllogtime(value: number) {
    this._acllogtime = value;
  }
  public resetAcllogtime() {
    this._acllogtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acllogtimeInput() {
    return this._acllogtime;
  }

  // allowclasseipv4 - computed: true, optional: true, required: false
  private _allowclasseipv4?: string; 
  public get allowclasseipv4() {
    return this.getStringAttribute('allowclasseipv4');
  }
  public set allowclasseipv4(value: string) {
    this._allowclasseipv4 = value;
  }
  public resetAllowclasseipv4() {
    this._allowclasseipv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowclasseipv4Input() {
    return this._allowclasseipv4;
  }

  // dropdfflag - computed: true, optional: true, required: false
  private _dropdfflag?: string; 
  public get dropdfflag() {
    return this.getStringAttribute('dropdfflag');
  }
  public set dropdfflag(value: string) {
    this._dropdfflag = value;
  }
  public resetDropdfflag() {
    this._dropdfflag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropdfflagInput() {
    return this._dropdfflag;
  }

  // dropipfragments - computed: true, optional: true, required: false
  private _dropipfragments?: string; 
  public get dropipfragments() {
    return this.getStringAttribute('dropipfragments');
  }
  public set dropipfragments(value: string) {
    this._dropipfragments = value;
  }
  public resetDropipfragments() {
    this._dropipfragments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropipfragmentsInput() {
    return this._dropipfragments;
  }

  // dynamicrouting - computed: true, optional: true, required: false
  private _dynamicrouting?: string; 
  public get dynamicrouting() {
    return this.getStringAttribute('dynamicrouting');
  }
  public set dynamicrouting(value: string) {
    this._dynamicrouting = value;
  }
  public resetDynamicrouting() {
    this._dynamicrouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicroutingInput() {
    return this._dynamicrouting;
  }

  // externalloopback - computed: true, optional: true, required: false
  private _externalloopback?: string; 
  public get externalloopback() {
    return this.getStringAttribute('externalloopback');
  }
  public set externalloopback(value: string) {
    this._externalloopback = value;
  }
  public resetExternalloopback() {
    this._externalloopback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalloopbackInput() {
    return this._externalloopback;
  }

  // forwardicmpfragments - computed: true, optional: true, required: false
  private _forwardicmpfragments?: string; 
  public get forwardicmpfragments() {
    return this.getStringAttribute('forwardicmpfragments');
  }
  public set forwardicmpfragments(value: string) {
    this._forwardicmpfragments = value;
  }
  public resetForwardicmpfragments() {
    this._forwardicmpfragments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardicmpfragmentsInput() {
    return this._forwardicmpfragments;
  }

  // icmpgenratethreshold - computed: true, optional: true, required: false
  private _icmpgenratethreshold?: number; 
  public get icmpgenratethreshold() {
    return this.getNumberAttribute('icmpgenratethreshold');
  }
  public set icmpgenratethreshold(value: number) {
    this._icmpgenratethreshold = value;
  }
  public resetIcmpgenratethreshold() {
    this._icmpgenratethreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpgenratethresholdInput() {
    return this._icmpgenratethreshold;
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

  // implicitaclallow - computed: true, optional: true, required: false
  private _implicitaclallow?: string; 
  public get implicitaclallow() {
    return this.getStringAttribute('implicitaclallow');
  }
  public set implicitaclallow(value: string) {
    this._implicitaclallow = value;
  }
  public resetImplicitaclallow() {
    this._implicitaclallow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get implicitaclallowInput() {
    return this._implicitaclallow;
  }

  // implicitpbr - computed: true, optional: true, required: false
  private _implicitpbr?: string; 
  public get implicitpbr() {
    return this.getStringAttribute('implicitpbr');
  }
  public set implicitpbr(value: string) {
    this._implicitpbr = value;
  }
  public resetImplicitpbr() {
    this._implicitpbr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get implicitpbrInput() {
    return this._implicitpbr;
  }

  // ipv6dynamicrouting - computed: true, optional: true, required: false
  private _ipv6Dynamicrouting?: string; 
  public get ipv6Dynamicrouting() {
    return this.getStringAttribute('ipv6dynamicrouting');
  }
  public set ipv6Dynamicrouting(value: string) {
    this._ipv6Dynamicrouting = value;
  }
  public resetIpv6Dynamicrouting() {
    this._ipv6Dynamicrouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DynamicroutingInput() {
    return this._ipv6Dynamicrouting;
  }

  // miproundrobin - computed: true, optional: true, required: false
  private _miproundrobin?: string; 
  public get miproundrobin() {
    return this.getStringAttribute('miproundrobin');
  }
  public set miproundrobin(value: string) {
    this._miproundrobin = value;
  }
  public resetMiproundrobin() {
    this._miproundrobin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get miproundrobinInput() {
    return this._miproundrobin;
  }

  // overridernat - computed: true, optional: true, required: false
  private _overridernat?: string; 
  public get overridernat() {
    return this.getStringAttribute('overridernat');
  }
  public set overridernat(value: string) {
    this._overridernat = value;
  }
  public resetOverridernat() {
    this._overridernat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridernatInput() {
    return this._overridernat;
  }

  // srcnat - computed: true, optional: true, required: false
  private _srcnat?: string; 
  public get srcnat() {
    return this.getStringAttribute('srcnat');
  }
  public set srcnat(value: string) {
    this._srcnat = value;
  }
  public resetSrcnat() {
    this._srcnat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcnatInput() {
    return this._srcnat;
  }

  // tnlpmtuwoconn - computed: true, optional: true, required: false
  private _tnlpmtuwoconn?: string; 
  public get tnlpmtuwoconn() {
    return this.getStringAttribute('tnlpmtuwoconn');
  }
  public set tnlpmtuwoconn(value: string) {
    this._tnlpmtuwoconn = value;
  }
  public resetTnlpmtuwoconn() {
    this._tnlpmtuwoconn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tnlpmtuwoconnInput() {
    return this._tnlpmtuwoconn;
  }

  // usipserverstraypkt - computed: true, optional: true, required: false
  private _usipserverstraypkt?: string; 
  public get usipserverstraypkt() {
    return this.getStringAttribute('usipserverstraypkt');
  }
  public set usipserverstraypkt(value: string) {
    this._usipserverstraypkt = value;
  }
  public resetUsipserverstraypkt() {
    this._usipserverstraypkt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usipserverstraypktInput() {
    return this._usipserverstraypkt;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acllogtime: cdktf.numberToTerraform(this._acllogtime),
      allowclasseipv4: cdktf.stringToTerraform(this._allowclasseipv4),
      dropdfflag: cdktf.stringToTerraform(this._dropdfflag),
      dropipfragments: cdktf.stringToTerraform(this._dropipfragments),
      dynamicrouting: cdktf.stringToTerraform(this._dynamicrouting),
      externalloopback: cdktf.stringToTerraform(this._externalloopback),
      forwardicmpfragments: cdktf.stringToTerraform(this._forwardicmpfragments),
      icmpgenratethreshold: cdktf.numberToTerraform(this._icmpgenratethreshold),
      id: cdktf.stringToTerraform(this._id),
      implicitaclallow: cdktf.stringToTerraform(this._implicitaclallow),
      implicitpbr: cdktf.stringToTerraform(this._implicitpbr),
      ipv6dynamicrouting: cdktf.stringToTerraform(this._ipv6Dynamicrouting),
      miproundrobin: cdktf.stringToTerraform(this._miproundrobin),
      overridernat: cdktf.stringToTerraform(this._overridernat),
      srcnat: cdktf.stringToTerraform(this._srcnat),
      tnlpmtuwoconn: cdktf.stringToTerraform(this._tnlpmtuwoconn),
      usipserverstraypkt: cdktf.stringToTerraform(this._usipserverstraypkt),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acllogtime: {
        value: cdktf.numberToHclTerraform(this._acllogtime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      allowclasseipv4: {
        value: cdktf.stringToHclTerraform(this._allowclasseipv4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dropdfflag: {
        value: cdktf.stringToHclTerraform(this._dropdfflag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dropipfragments: {
        value: cdktf.stringToHclTerraform(this._dropipfragments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamicrouting: {
        value: cdktf.stringToHclTerraform(this._dynamicrouting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      externalloopback: {
        value: cdktf.stringToHclTerraform(this._externalloopback),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forwardicmpfragments: {
        value: cdktf.stringToHclTerraform(this._forwardicmpfragments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icmpgenratethreshold: {
        value: cdktf.numberToHclTerraform(this._icmpgenratethreshold),
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
      implicitaclallow: {
        value: cdktf.stringToHclTerraform(this._implicitaclallow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      implicitpbr: {
        value: cdktf.stringToHclTerraform(this._implicitpbr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6dynamicrouting: {
        value: cdktf.stringToHclTerraform(this._ipv6Dynamicrouting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      miproundrobin: {
        value: cdktf.stringToHclTerraform(this._miproundrobin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      overridernat: {
        value: cdktf.stringToHclTerraform(this._overridernat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      srcnat: {
        value: cdktf.stringToHclTerraform(this._srcnat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tnlpmtuwoconn: {
        value: cdktf.stringToHclTerraform(this._tnlpmtuwoconn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usipserverstraypkt: {
        value: cdktf.stringToHclTerraform(this._usipserverstraypkt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
