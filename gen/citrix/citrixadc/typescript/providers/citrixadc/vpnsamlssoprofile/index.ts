// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnsamlssoprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#assertionconsumerserviceurl Vpnsamlssoprofile#assertionconsumerserviceurl}
  */
  readonly assertionconsumerserviceurl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute1 Vpnsamlssoprofile#attribute1}
  */
  readonly attribute1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute10 Vpnsamlssoprofile#attribute10}
  */
  readonly attribute10?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute10expr Vpnsamlssoprofile#attribute10expr}
  */
  readonly attribute10Expr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute10format Vpnsamlssoprofile#attribute10format}
  */
  readonly attribute10Format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute10friendlyname Vpnsamlssoprofile#attribute10friendlyname}
  */
  readonly attribute10Friendlyname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute11 Vpnsamlssoprofile#attribute11}
  */
  readonly attribute11?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute11expr Vpnsamlssoprofile#attribute11expr}
  */
  readonly attribute11Expr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute11format Vpnsamlssoprofile#attribute11format}
  */
  readonly attribute11Format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute11friendlyname Vpnsamlssoprofile#attribute11friendlyname}
  */
  readonly attribute11Friendlyname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute12 Vpnsamlssoprofile#attribute12}
  */
  readonly attribute12?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute12expr Vpnsamlssoprofile#attribute12expr}
  */
  readonly attribute12Expr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute12format Vpnsamlssoprofile#attribute12format}
  */
  readonly attribute12Format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute12friendlyname Vpnsamlssoprofile#attribute12friendlyname}
  */
  readonly attribute12Friendlyname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute13 Vpnsamlssoprofile#attribute13}
  */
  readonly attribute13?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute13expr Vpnsamlssoprofile#attribute13expr}
  */
  readonly attribute13Expr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute13format Vpnsamlssoprofile#attribute13format}
  */
  readonly attribute13Format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute13friendlyname Vpnsamlssoprofile#attribute13friendlyname}
  */
  readonly attribute13Friendlyname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute14 Vpnsamlssoprofile#attribute14}
  */
  readonly attribute14?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute14expr Vpnsamlssoprofile#attribute14expr}
  */
  readonly attribute14Expr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute14format Vpnsamlssoprofile#attribute14format}
  */
  readonly attribute14Format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute14friendlyname Vpnsamlssoprofile#attribute14friendlyname}
  */
  readonly attribute14Friendlyname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute15 Vpnsamlssoprofile#attribute15}
  */
  readonly attribute15?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute15expr Vpnsamlssoprofile#attribute15expr}
  */
  readonly attribute15Expr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute15format Vpnsamlssoprofile#attribute15format}
  */
  readonly attribute15Format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute15friendlyname Vpnsamlssoprofile#attribute15friendlyname}
  */
  readonly attribute15Friendlyname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute16 Vpnsamlssoprofile#attribute16}
  */
  readonly attribute16?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute16expr Vpnsamlssoprofile#attribute16expr}
  */
  readonly attribute16Expr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute16format Vpnsamlssoprofile#attribute16format}
  */
  readonly attribute16Format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute16friendlyname Vpnsamlssoprofile#attribute16friendlyname}
  */
  readonly attribute16Friendlyname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute1expr Vpnsamlssoprofile#attribute1expr}
  */
  readonly attribute1Expr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute1format Vpnsamlssoprofile#attribute1format}
  */
  readonly attribute1Format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute1friendlyname Vpnsamlssoprofile#attribute1friendlyname}
  */
  readonly attribute1Friendlyname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute2 Vpnsamlssoprofile#attribute2}
  */
  readonly attribute2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute2expr Vpnsamlssoprofile#attribute2expr}
  */
  readonly attribute2Expr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute2format Vpnsamlssoprofile#attribute2format}
  */
  readonly attribute2Format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute2friendlyname Vpnsamlssoprofile#attribute2friendlyname}
  */
  readonly attribute2Friendlyname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute3 Vpnsamlssoprofile#attribute3}
  */
  readonly attribute3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute3expr Vpnsamlssoprofile#attribute3expr}
  */
  readonly attribute3Expr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute3format Vpnsamlssoprofile#attribute3format}
  */
  readonly attribute3Format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute3friendlyname Vpnsamlssoprofile#attribute3friendlyname}
  */
  readonly attribute3Friendlyname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute4 Vpnsamlssoprofile#attribute4}
  */
  readonly attribute4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute4expr Vpnsamlssoprofile#attribute4expr}
  */
  readonly attribute4Expr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute4format Vpnsamlssoprofile#attribute4format}
  */
  readonly attribute4Format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute4friendlyname Vpnsamlssoprofile#attribute4friendlyname}
  */
  readonly attribute4Friendlyname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute5 Vpnsamlssoprofile#attribute5}
  */
  readonly attribute5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute5expr Vpnsamlssoprofile#attribute5expr}
  */
  readonly attribute5Expr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute5format Vpnsamlssoprofile#attribute5format}
  */
  readonly attribute5Format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute5friendlyname Vpnsamlssoprofile#attribute5friendlyname}
  */
  readonly attribute5Friendlyname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute6 Vpnsamlssoprofile#attribute6}
  */
  readonly attribute6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute6expr Vpnsamlssoprofile#attribute6expr}
  */
  readonly attribute6Expr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute6format Vpnsamlssoprofile#attribute6format}
  */
  readonly attribute6Format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute6friendlyname Vpnsamlssoprofile#attribute6friendlyname}
  */
  readonly attribute6Friendlyname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute7 Vpnsamlssoprofile#attribute7}
  */
  readonly attribute7?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute7expr Vpnsamlssoprofile#attribute7expr}
  */
  readonly attribute7Expr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute7format Vpnsamlssoprofile#attribute7format}
  */
  readonly attribute7Format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute7friendlyname Vpnsamlssoprofile#attribute7friendlyname}
  */
  readonly attribute7Friendlyname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute8 Vpnsamlssoprofile#attribute8}
  */
  readonly attribute8?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute8expr Vpnsamlssoprofile#attribute8expr}
  */
  readonly attribute8Expr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute8format Vpnsamlssoprofile#attribute8format}
  */
  readonly attribute8Format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute8friendlyname Vpnsamlssoprofile#attribute8friendlyname}
  */
  readonly attribute8Friendlyname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute9 Vpnsamlssoprofile#attribute9}
  */
  readonly attribute9?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute9expr Vpnsamlssoprofile#attribute9expr}
  */
  readonly attribute9Expr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute9format Vpnsamlssoprofile#attribute9format}
  */
  readonly attribute9Format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#attribute9friendlyname Vpnsamlssoprofile#attribute9friendlyname}
  */
  readonly attribute9Friendlyname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#audience Vpnsamlssoprofile#audience}
  */
  readonly audience?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#digestmethod Vpnsamlssoprofile#digestmethod}
  */
  readonly digestmethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#encryptassertion Vpnsamlssoprofile#encryptassertion}
  */
  readonly encryptassertion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#encryptionalgorithm Vpnsamlssoprofile#encryptionalgorithm}
  */
  readonly encryptionalgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#id Vpnsamlssoprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#name Vpnsamlssoprofile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#nameidexpr Vpnsamlssoprofile#nameidexpr}
  */
  readonly nameidexpr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#nameidformat Vpnsamlssoprofile#nameidformat}
  */
  readonly nameidformat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#relaystaterule Vpnsamlssoprofile#relaystaterule}
  */
  readonly relaystaterule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#samlissuername Vpnsamlssoprofile#samlissuername}
  */
  readonly samlissuername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#samlsigningcertname Vpnsamlssoprofile#samlsigningcertname}
  */
  readonly samlsigningcertname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#samlspcertname Vpnsamlssoprofile#samlspcertname}
  */
  readonly samlspcertname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#sendpassword Vpnsamlssoprofile#sendpassword}
  */
  readonly sendpassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#signassertion Vpnsamlssoprofile#signassertion}
  */
  readonly signassertion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#signaturealg Vpnsamlssoprofile#signaturealg}
  */
  readonly signaturealg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#signatureservice Vpnsamlssoprofile#signatureservice}
  */
  readonly signatureservice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#skewtime Vpnsamlssoprofile#skewtime}
  */
  readonly skewtime?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile citrixadc_vpnsamlssoprofile}
*/
export class Vpnsamlssoprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_vpnsamlssoprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vpnsamlssoprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vpnsamlssoprofile to import
  * @param importFromId The id of the existing Vpnsamlssoprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vpnsamlssoprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_vpnsamlssoprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnsamlssoprofile citrixadc_vpnsamlssoprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnsamlssoprofileConfig
  */
  public constructor(scope: Construct, id: string, config: VpnsamlssoprofileConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_vpnsamlssoprofile',
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
    this._assertionconsumerserviceurl = config.assertionconsumerserviceurl;
    this._attribute1 = config.attribute1;
    this._attribute10 = config.attribute10;
    this._attribute10Expr = config.attribute10Expr;
    this._attribute10Format = config.attribute10Format;
    this._attribute10Friendlyname = config.attribute10Friendlyname;
    this._attribute11 = config.attribute11;
    this._attribute11Expr = config.attribute11Expr;
    this._attribute11Format = config.attribute11Format;
    this._attribute11Friendlyname = config.attribute11Friendlyname;
    this._attribute12 = config.attribute12;
    this._attribute12Expr = config.attribute12Expr;
    this._attribute12Format = config.attribute12Format;
    this._attribute12Friendlyname = config.attribute12Friendlyname;
    this._attribute13 = config.attribute13;
    this._attribute13Expr = config.attribute13Expr;
    this._attribute13Format = config.attribute13Format;
    this._attribute13Friendlyname = config.attribute13Friendlyname;
    this._attribute14 = config.attribute14;
    this._attribute14Expr = config.attribute14Expr;
    this._attribute14Format = config.attribute14Format;
    this._attribute14Friendlyname = config.attribute14Friendlyname;
    this._attribute15 = config.attribute15;
    this._attribute15Expr = config.attribute15Expr;
    this._attribute15Format = config.attribute15Format;
    this._attribute15Friendlyname = config.attribute15Friendlyname;
    this._attribute16 = config.attribute16;
    this._attribute16Expr = config.attribute16Expr;
    this._attribute16Format = config.attribute16Format;
    this._attribute16Friendlyname = config.attribute16Friendlyname;
    this._attribute1Expr = config.attribute1Expr;
    this._attribute1Format = config.attribute1Format;
    this._attribute1Friendlyname = config.attribute1Friendlyname;
    this._attribute2 = config.attribute2;
    this._attribute2Expr = config.attribute2Expr;
    this._attribute2Format = config.attribute2Format;
    this._attribute2Friendlyname = config.attribute2Friendlyname;
    this._attribute3 = config.attribute3;
    this._attribute3Expr = config.attribute3Expr;
    this._attribute3Format = config.attribute3Format;
    this._attribute3Friendlyname = config.attribute3Friendlyname;
    this._attribute4 = config.attribute4;
    this._attribute4Expr = config.attribute4Expr;
    this._attribute4Format = config.attribute4Format;
    this._attribute4Friendlyname = config.attribute4Friendlyname;
    this._attribute5 = config.attribute5;
    this._attribute5Expr = config.attribute5Expr;
    this._attribute5Format = config.attribute5Format;
    this._attribute5Friendlyname = config.attribute5Friendlyname;
    this._attribute6 = config.attribute6;
    this._attribute6Expr = config.attribute6Expr;
    this._attribute6Format = config.attribute6Format;
    this._attribute6Friendlyname = config.attribute6Friendlyname;
    this._attribute7 = config.attribute7;
    this._attribute7Expr = config.attribute7Expr;
    this._attribute7Format = config.attribute7Format;
    this._attribute7Friendlyname = config.attribute7Friendlyname;
    this._attribute8 = config.attribute8;
    this._attribute8Expr = config.attribute8Expr;
    this._attribute8Format = config.attribute8Format;
    this._attribute8Friendlyname = config.attribute8Friendlyname;
    this._attribute9 = config.attribute9;
    this._attribute9Expr = config.attribute9Expr;
    this._attribute9Format = config.attribute9Format;
    this._attribute9Friendlyname = config.attribute9Friendlyname;
    this._audience = config.audience;
    this._digestmethod = config.digestmethod;
    this._encryptassertion = config.encryptassertion;
    this._encryptionalgorithm = config.encryptionalgorithm;
    this._id = config.id;
    this._name = config.name;
    this._nameidexpr = config.nameidexpr;
    this._nameidformat = config.nameidformat;
    this._relaystaterule = config.relaystaterule;
    this._samlissuername = config.samlissuername;
    this._samlsigningcertname = config.samlsigningcertname;
    this._samlspcertname = config.samlspcertname;
    this._sendpassword = config.sendpassword;
    this._signassertion = config.signassertion;
    this._signaturealg = config.signaturealg;
    this._signatureservice = config.signatureservice;
    this._skewtime = config.skewtime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assertionconsumerserviceurl - computed: false, optional: false, required: true
  private _assertionconsumerserviceurl?: string; 
  public get assertionconsumerserviceurl() {
    return this.getStringAttribute('assertionconsumerserviceurl');
  }
  public set assertionconsumerserviceurl(value: string) {
    this._assertionconsumerserviceurl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assertionconsumerserviceurlInput() {
    return this._assertionconsumerserviceurl;
  }

  // attribute1 - computed: true, optional: true, required: false
  private _attribute1?: string; 
  public get attribute1() {
    return this.getStringAttribute('attribute1');
  }
  public set attribute1(value: string) {
    this._attribute1 = value;
  }
  public resetAttribute1() {
    this._attribute1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute1Input() {
    return this._attribute1;
  }

  // attribute10 - computed: true, optional: true, required: false
  private _attribute10?: string; 
  public get attribute10() {
    return this.getStringAttribute('attribute10');
  }
  public set attribute10(value: string) {
    this._attribute10 = value;
  }
  public resetAttribute10() {
    this._attribute10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute10Input() {
    return this._attribute10;
  }

  // attribute10expr - computed: true, optional: true, required: false
  private _attribute10Expr?: string; 
  public get attribute10Expr() {
    return this.getStringAttribute('attribute10expr');
  }
  public set attribute10Expr(value: string) {
    this._attribute10Expr = value;
  }
  public resetAttribute10Expr() {
    this._attribute10Expr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute10ExprInput() {
    return this._attribute10Expr;
  }

  // attribute10format - computed: true, optional: true, required: false
  private _attribute10Format?: string; 
  public get attribute10Format() {
    return this.getStringAttribute('attribute10format');
  }
  public set attribute10Format(value: string) {
    this._attribute10Format = value;
  }
  public resetAttribute10Format() {
    this._attribute10Format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute10FormatInput() {
    return this._attribute10Format;
  }

  // attribute10friendlyname - computed: true, optional: true, required: false
  private _attribute10Friendlyname?: string; 
  public get attribute10Friendlyname() {
    return this.getStringAttribute('attribute10friendlyname');
  }
  public set attribute10Friendlyname(value: string) {
    this._attribute10Friendlyname = value;
  }
  public resetAttribute10Friendlyname() {
    this._attribute10Friendlyname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute10FriendlynameInput() {
    return this._attribute10Friendlyname;
  }

  // attribute11 - computed: true, optional: true, required: false
  private _attribute11?: string; 
  public get attribute11() {
    return this.getStringAttribute('attribute11');
  }
  public set attribute11(value: string) {
    this._attribute11 = value;
  }
  public resetAttribute11() {
    this._attribute11 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute11Input() {
    return this._attribute11;
  }

  // attribute11expr - computed: true, optional: true, required: false
  private _attribute11Expr?: string; 
  public get attribute11Expr() {
    return this.getStringAttribute('attribute11expr');
  }
  public set attribute11Expr(value: string) {
    this._attribute11Expr = value;
  }
  public resetAttribute11Expr() {
    this._attribute11Expr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute11ExprInput() {
    return this._attribute11Expr;
  }

  // attribute11format - computed: true, optional: true, required: false
  private _attribute11Format?: string; 
  public get attribute11Format() {
    return this.getStringAttribute('attribute11format');
  }
  public set attribute11Format(value: string) {
    this._attribute11Format = value;
  }
  public resetAttribute11Format() {
    this._attribute11Format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute11FormatInput() {
    return this._attribute11Format;
  }

  // attribute11friendlyname - computed: true, optional: true, required: false
  private _attribute11Friendlyname?: string; 
  public get attribute11Friendlyname() {
    return this.getStringAttribute('attribute11friendlyname');
  }
  public set attribute11Friendlyname(value: string) {
    this._attribute11Friendlyname = value;
  }
  public resetAttribute11Friendlyname() {
    this._attribute11Friendlyname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute11FriendlynameInput() {
    return this._attribute11Friendlyname;
  }

  // attribute12 - computed: true, optional: true, required: false
  private _attribute12?: string; 
  public get attribute12() {
    return this.getStringAttribute('attribute12');
  }
  public set attribute12(value: string) {
    this._attribute12 = value;
  }
  public resetAttribute12() {
    this._attribute12 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute12Input() {
    return this._attribute12;
  }

  // attribute12expr - computed: true, optional: true, required: false
  private _attribute12Expr?: string; 
  public get attribute12Expr() {
    return this.getStringAttribute('attribute12expr');
  }
  public set attribute12Expr(value: string) {
    this._attribute12Expr = value;
  }
  public resetAttribute12Expr() {
    this._attribute12Expr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute12ExprInput() {
    return this._attribute12Expr;
  }

  // attribute12format - computed: true, optional: true, required: false
  private _attribute12Format?: string; 
  public get attribute12Format() {
    return this.getStringAttribute('attribute12format');
  }
  public set attribute12Format(value: string) {
    this._attribute12Format = value;
  }
  public resetAttribute12Format() {
    this._attribute12Format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute12FormatInput() {
    return this._attribute12Format;
  }

  // attribute12friendlyname - computed: true, optional: true, required: false
  private _attribute12Friendlyname?: string; 
  public get attribute12Friendlyname() {
    return this.getStringAttribute('attribute12friendlyname');
  }
  public set attribute12Friendlyname(value: string) {
    this._attribute12Friendlyname = value;
  }
  public resetAttribute12Friendlyname() {
    this._attribute12Friendlyname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute12FriendlynameInput() {
    return this._attribute12Friendlyname;
  }

  // attribute13 - computed: true, optional: true, required: false
  private _attribute13?: string; 
  public get attribute13() {
    return this.getStringAttribute('attribute13');
  }
  public set attribute13(value: string) {
    this._attribute13 = value;
  }
  public resetAttribute13() {
    this._attribute13 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute13Input() {
    return this._attribute13;
  }

  // attribute13expr - computed: true, optional: true, required: false
  private _attribute13Expr?: string; 
  public get attribute13Expr() {
    return this.getStringAttribute('attribute13expr');
  }
  public set attribute13Expr(value: string) {
    this._attribute13Expr = value;
  }
  public resetAttribute13Expr() {
    this._attribute13Expr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute13ExprInput() {
    return this._attribute13Expr;
  }

  // attribute13format - computed: true, optional: true, required: false
  private _attribute13Format?: string; 
  public get attribute13Format() {
    return this.getStringAttribute('attribute13format');
  }
  public set attribute13Format(value: string) {
    this._attribute13Format = value;
  }
  public resetAttribute13Format() {
    this._attribute13Format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute13FormatInput() {
    return this._attribute13Format;
  }

  // attribute13friendlyname - computed: true, optional: true, required: false
  private _attribute13Friendlyname?: string; 
  public get attribute13Friendlyname() {
    return this.getStringAttribute('attribute13friendlyname');
  }
  public set attribute13Friendlyname(value: string) {
    this._attribute13Friendlyname = value;
  }
  public resetAttribute13Friendlyname() {
    this._attribute13Friendlyname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute13FriendlynameInput() {
    return this._attribute13Friendlyname;
  }

  // attribute14 - computed: true, optional: true, required: false
  private _attribute14?: string; 
  public get attribute14() {
    return this.getStringAttribute('attribute14');
  }
  public set attribute14(value: string) {
    this._attribute14 = value;
  }
  public resetAttribute14() {
    this._attribute14 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute14Input() {
    return this._attribute14;
  }

  // attribute14expr - computed: true, optional: true, required: false
  private _attribute14Expr?: string; 
  public get attribute14Expr() {
    return this.getStringAttribute('attribute14expr');
  }
  public set attribute14Expr(value: string) {
    this._attribute14Expr = value;
  }
  public resetAttribute14Expr() {
    this._attribute14Expr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute14ExprInput() {
    return this._attribute14Expr;
  }

  // attribute14format - computed: true, optional: true, required: false
  private _attribute14Format?: string; 
  public get attribute14Format() {
    return this.getStringAttribute('attribute14format');
  }
  public set attribute14Format(value: string) {
    this._attribute14Format = value;
  }
  public resetAttribute14Format() {
    this._attribute14Format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute14FormatInput() {
    return this._attribute14Format;
  }

  // attribute14friendlyname - computed: true, optional: true, required: false
  private _attribute14Friendlyname?: string; 
  public get attribute14Friendlyname() {
    return this.getStringAttribute('attribute14friendlyname');
  }
  public set attribute14Friendlyname(value: string) {
    this._attribute14Friendlyname = value;
  }
  public resetAttribute14Friendlyname() {
    this._attribute14Friendlyname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute14FriendlynameInput() {
    return this._attribute14Friendlyname;
  }

  // attribute15 - computed: true, optional: true, required: false
  private _attribute15?: string; 
  public get attribute15() {
    return this.getStringAttribute('attribute15');
  }
  public set attribute15(value: string) {
    this._attribute15 = value;
  }
  public resetAttribute15() {
    this._attribute15 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute15Input() {
    return this._attribute15;
  }

  // attribute15expr - computed: true, optional: true, required: false
  private _attribute15Expr?: string; 
  public get attribute15Expr() {
    return this.getStringAttribute('attribute15expr');
  }
  public set attribute15Expr(value: string) {
    this._attribute15Expr = value;
  }
  public resetAttribute15Expr() {
    this._attribute15Expr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute15ExprInput() {
    return this._attribute15Expr;
  }

  // attribute15format - computed: true, optional: true, required: false
  private _attribute15Format?: string; 
  public get attribute15Format() {
    return this.getStringAttribute('attribute15format');
  }
  public set attribute15Format(value: string) {
    this._attribute15Format = value;
  }
  public resetAttribute15Format() {
    this._attribute15Format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute15FormatInput() {
    return this._attribute15Format;
  }

  // attribute15friendlyname - computed: true, optional: true, required: false
  private _attribute15Friendlyname?: string; 
  public get attribute15Friendlyname() {
    return this.getStringAttribute('attribute15friendlyname');
  }
  public set attribute15Friendlyname(value: string) {
    this._attribute15Friendlyname = value;
  }
  public resetAttribute15Friendlyname() {
    this._attribute15Friendlyname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute15FriendlynameInput() {
    return this._attribute15Friendlyname;
  }

  // attribute16 - computed: true, optional: true, required: false
  private _attribute16?: string; 
  public get attribute16() {
    return this.getStringAttribute('attribute16');
  }
  public set attribute16(value: string) {
    this._attribute16 = value;
  }
  public resetAttribute16() {
    this._attribute16 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute16Input() {
    return this._attribute16;
  }

  // attribute16expr - computed: true, optional: true, required: false
  private _attribute16Expr?: string; 
  public get attribute16Expr() {
    return this.getStringAttribute('attribute16expr');
  }
  public set attribute16Expr(value: string) {
    this._attribute16Expr = value;
  }
  public resetAttribute16Expr() {
    this._attribute16Expr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute16ExprInput() {
    return this._attribute16Expr;
  }

  // attribute16format - computed: true, optional: true, required: false
  private _attribute16Format?: string; 
  public get attribute16Format() {
    return this.getStringAttribute('attribute16format');
  }
  public set attribute16Format(value: string) {
    this._attribute16Format = value;
  }
  public resetAttribute16Format() {
    this._attribute16Format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute16FormatInput() {
    return this._attribute16Format;
  }

  // attribute16friendlyname - computed: true, optional: true, required: false
  private _attribute16Friendlyname?: string; 
  public get attribute16Friendlyname() {
    return this.getStringAttribute('attribute16friendlyname');
  }
  public set attribute16Friendlyname(value: string) {
    this._attribute16Friendlyname = value;
  }
  public resetAttribute16Friendlyname() {
    this._attribute16Friendlyname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute16FriendlynameInput() {
    return this._attribute16Friendlyname;
  }

  // attribute1expr - computed: true, optional: true, required: false
  private _attribute1Expr?: string; 
  public get attribute1Expr() {
    return this.getStringAttribute('attribute1expr');
  }
  public set attribute1Expr(value: string) {
    this._attribute1Expr = value;
  }
  public resetAttribute1Expr() {
    this._attribute1Expr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute1ExprInput() {
    return this._attribute1Expr;
  }

  // attribute1format - computed: true, optional: true, required: false
  private _attribute1Format?: string; 
  public get attribute1Format() {
    return this.getStringAttribute('attribute1format');
  }
  public set attribute1Format(value: string) {
    this._attribute1Format = value;
  }
  public resetAttribute1Format() {
    this._attribute1Format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute1FormatInput() {
    return this._attribute1Format;
  }

  // attribute1friendlyname - computed: true, optional: true, required: false
  private _attribute1Friendlyname?: string; 
  public get attribute1Friendlyname() {
    return this.getStringAttribute('attribute1friendlyname');
  }
  public set attribute1Friendlyname(value: string) {
    this._attribute1Friendlyname = value;
  }
  public resetAttribute1Friendlyname() {
    this._attribute1Friendlyname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute1FriendlynameInput() {
    return this._attribute1Friendlyname;
  }

  // attribute2 - computed: true, optional: true, required: false
  private _attribute2?: string; 
  public get attribute2() {
    return this.getStringAttribute('attribute2');
  }
  public set attribute2(value: string) {
    this._attribute2 = value;
  }
  public resetAttribute2() {
    this._attribute2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute2Input() {
    return this._attribute2;
  }

  // attribute2expr - computed: true, optional: true, required: false
  private _attribute2Expr?: string; 
  public get attribute2Expr() {
    return this.getStringAttribute('attribute2expr');
  }
  public set attribute2Expr(value: string) {
    this._attribute2Expr = value;
  }
  public resetAttribute2Expr() {
    this._attribute2Expr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute2ExprInput() {
    return this._attribute2Expr;
  }

  // attribute2format - computed: true, optional: true, required: false
  private _attribute2Format?: string; 
  public get attribute2Format() {
    return this.getStringAttribute('attribute2format');
  }
  public set attribute2Format(value: string) {
    this._attribute2Format = value;
  }
  public resetAttribute2Format() {
    this._attribute2Format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute2FormatInput() {
    return this._attribute2Format;
  }

  // attribute2friendlyname - computed: true, optional: true, required: false
  private _attribute2Friendlyname?: string; 
  public get attribute2Friendlyname() {
    return this.getStringAttribute('attribute2friendlyname');
  }
  public set attribute2Friendlyname(value: string) {
    this._attribute2Friendlyname = value;
  }
  public resetAttribute2Friendlyname() {
    this._attribute2Friendlyname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute2FriendlynameInput() {
    return this._attribute2Friendlyname;
  }

  // attribute3 - computed: true, optional: true, required: false
  private _attribute3?: string; 
  public get attribute3() {
    return this.getStringAttribute('attribute3');
  }
  public set attribute3(value: string) {
    this._attribute3 = value;
  }
  public resetAttribute3() {
    this._attribute3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute3Input() {
    return this._attribute3;
  }

  // attribute3expr - computed: true, optional: true, required: false
  private _attribute3Expr?: string; 
  public get attribute3Expr() {
    return this.getStringAttribute('attribute3expr');
  }
  public set attribute3Expr(value: string) {
    this._attribute3Expr = value;
  }
  public resetAttribute3Expr() {
    this._attribute3Expr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute3ExprInput() {
    return this._attribute3Expr;
  }

  // attribute3format - computed: true, optional: true, required: false
  private _attribute3Format?: string; 
  public get attribute3Format() {
    return this.getStringAttribute('attribute3format');
  }
  public set attribute3Format(value: string) {
    this._attribute3Format = value;
  }
  public resetAttribute3Format() {
    this._attribute3Format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute3FormatInput() {
    return this._attribute3Format;
  }

  // attribute3friendlyname - computed: true, optional: true, required: false
  private _attribute3Friendlyname?: string; 
  public get attribute3Friendlyname() {
    return this.getStringAttribute('attribute3friendlyname');
  }
  public set attribute3Friendlyname(value: string) {
    this._attribute3Friendlyname = value;
  }
  public resetAttribute3Friendlyname() {
    this._attribute3Friendlyname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute3FriendlynameInput() {
    return this._attribute3Friendlyname;
  }

  // attribute4 - computed: true, optional: true, required: false
  private _attribute4?: string; 
  public get attribute4() {
    return this.getStringAttribute('attribute4');
  }
  public set attribute4(value: string) {
    this._attribute4 = value;
  }
  public resetAttribute4() {
    this._attribute4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute4Input() {
    return this._attribute4;
  }

  // attribute4expr - computed: true, optional: true, required: false
  private _attribute4Expr?: string; 
  public get attribute4Expr() {
    return this.getStringAttribute('attribute4expr');
  }
  public set attribute4Expr(value: string) {
    this._attribute4Expr = value;
  }
  public resetAttribute4Expr() {
    this._attribute4Expr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute4ExprInput() {
    return this._attribute4Expr;
  }

  // attribute4format - computed: true, optional: true, required: false
  private _attribute4Format?: string; 
  public get attribute4Format() {
    return this.getStringAttribute('attribute4format');
  }
  public set attribute4Format(value: string) {
    this._attribute4Format = value;
  }
  public resetAttribute4Format() {
    this._attribute4Format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute4FormatInput() {
    return this._attribute4Format;
  }

  // attribute4friendlyname - computed: true, optional: true, required: false
  private _attribute4Friendlyname?: string; 
  public get attribute4Friendlyname() {
    return this.getStringAttribute('attribute4friendlyname');
  }
  public set attribute4Friendlyname(value: string) {
    this._attribute4Friendlyname = value;
  }
  public resetAttribute4Friendlyname() {
    this._attribute4Friendlyname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute4FriendlynameInput() {
    return this._attribute4Friendlyname;
  }

  // attribute5 - computed: true, optional: true, required: false
  private _attribute5?: string; 
  public get attribute5() {
    return this.getStringAttribute('attribute5');
  }
  public set attribute5(value: string) {
    this._attribute5 = value;
  }
  public resetAttribute5() {
    this._attribute5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute5Input() {
    return this._attribute5;
  }

  // attribute5expr - computed: true, optional: true, required: false
  private _attribute5Expr?: string; 
  public get attribute5Expr() {
    return this.getStringAttribute('attribute5expr');
  }
  public set attribute5Expr(value: string) {
    this._attribute5Expr = value;
  }
  public resetAttribute5Expr() {
    this._attribute5Expr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute5ExprInput() {
    return this._attribute5Expr;
  }

  // attribute5format - computed: true, optional: true, required: false
  private _attribute5Format?: string; 
  public get attribute5Format() {
    return this.getStringAttribute('attribute5format');
  }
  public set attribute5Format(value: string) {
    this._attribute5Format = value;
  }
  public resetAttribute5Format() {
    this._attribute5Format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute5FormatInput() {
    return this._attribute5Format;
  }

  // attribute5friendlyname - computed: true, optional: true, required: false
  private _attribute5Friendlyname?: string; 
  public get attribute5Friendlyname() {
    return this.getStringAttribute('attribute5friendlyname');
  }
  public set attribute5Friendlyname(value: string) {
    this._attribute5Friendlyname = value;
  }
  public resetAttribute5Friendlyname() {
    this._attribute5Friendlyname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute5FriendlynameInput() {
    return this._attribute5Friendlyname;
  }

  // attribute6 - computed: true, optional: true, required: false
  private _attribute6?: string; 
  public get attribute6() {
    return this.getStringAttribute('attribute6');
  }
  public set attribute6(value: string) {
    this._attribute6 = value;
  }
  public resetAttribute6() {
    this._attribute6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute6Input() {
    return this._attribute6;
  }

  // attribute6expr - computed: true, optional: true, required: false
  private _attribute6Expr?: string; 
  public get attribute6Expr() {
    return this.getStringAttribute('attribute6expr');
  }
  public set attribute6Expr(value: string) {
    this._attribute6Expr = value;
  }
  public resetAttribute6Expr() {
    this._attribute6Expr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute6ExprInput() {
    return this._attribute6Expr;
  }

  // attribute6format - computed: true, optional: true, required: false
  private _attribute6Format?: string; 
  public get attribute6Format() {
    return this.getStringAttribute('attribute6format');
  }
  public set attribute6Format(value: string) {
    this._attribute6Format = value;
  }
  public resetAttribute6Format() {
    this._attribute6Format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute6FormatInput() {
    return this._attribute6Format;
  }

  // attribute6friendlyname - computed: true, optional: true, required: false
  private _attribute6Friendlyname?: string; 
  public get attribute6Friendlyname() {
    return this.getStringAttribute('attribute6friendlyname');
  }
  public set attribute6Friendlyname(value: string) {
    this._attribute6Friendlyname = value;
  }
  public resetAttribute6Friendlyname() {
    this._attribute6Friendlyname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute6FriendlynameInput() {
    return this._attribute6Friendlyname;
  }

  // attribute7 - computed: true, optional: true, required: false
  private _attribute7?: string; 
  public get attribute7() {
    return this.getStringAttribute('attribute7');
  }
  public set attribute7(value: string) {
    this._attribute7 = value;
  }
  public resetAttribute7() {
    this._attribute7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute7Input() {
    return this._attribute7;
  }

  // attribute7expr - computed: true, optional: true, required: false
  private _attribute7Expr?: string; 
  public get attribute7Expr() {
    return this.getStringAttribute('attribute7expr');
  }
  public set attribute7Expr(value: string) {
    this._attribute7Expr = value;
  }
  public resetAttribute7Expr() {
    this._attribute7Expr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute7ExprInput() {
    return this._attribute7Expr;
  }

  // attribute7format - computed: true, optional: true, required: false
  private _attribute7Format?: string; 
  public get attribute7Format() {
    return this.getStringAttribute('attribute7format');
  }
  public set attribute7Format(value: string) {
    this._attribute7Format = value;
  }
  public resetAttribute7Format() {
    this._attribute7Format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute7FormatInput() {
    return this._attribute7Format;
  }

  // attribute7friendlyname - computed: true, optional: true, required: false
  private _attribute7Friendlyname?: string; 
  public get attribute7Friendlyname() {
    return this.getStringAttribute('attribute7friendlyname');
  }
  public set attribute7Friendlyname(value: string) {
    this._attribute7Friendlyname = value;
  }
  public resetAttribute7Friendlyname() {
    this._attribute7Friendlyname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute7FriendlynameInput() {
    return this._attribute7Friendlyname;
  }

  // attribute8 - computed: true, optional: true, required: false
  private _attribute8?: string; 
  public get attribute8() {
    return this.getStringAttribute('attribute8');
  }
  public set attribute8(value: string) {
    this._attribute8 = value;
  }
  public resetAttribute8() {
    this._attribute8 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute8Input() {
    return this._attribute8;
  }

  // attribute8expr - computed: true, optional: true, required: false
  private _attribute8Expr?: string; 
  public get attribute8Expr() {
    return this.getStringAttribute('attribute8expr');
  }
  public set attribute8Expr(value: string) {
    this._attribute8Expr = value;
  }
  public resetAttribute8Expr() {
    this._attribute8Expr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute8ExprInput() {
    return this._attribute8Expr;
  }

  // attribute8format - computed: true, optional: true, required: false
  private _attribute8Format?: string; 
  public get attribute8Format() {
    return this.getStringAttribute('attribute8format');
  }
  public set attribute8Format(value: string) {
    this._attribute8Format = value;
  }
  public resetAttribute8Format() {
    this._attribute8Format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute8FormatInput() {
    return this._attribute8Format;
  }

  // attribute8friendlyname - computed: true, optional: true, required: false
  private _attribute8Friendlyname?: string; 
  public get attribute8Friendlyname() {
    return this.getStringAttribute('attribute8friendlyname');
  }
  public set attribute8Friendlyname(value: string) {
    this._attribute8Friendlyname = value;
  }
  public resetAttribute8Friendlyname() {
    this._attribute8Friendlyname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute8FriendlynameInput() {
    return this._attribute8Friendlyname;
  }

  // attribute9 - computed: true, optional: true, required: false
  private _attribute9?: string; 
  public get attribute9() {
    return this.getStringAttribute('attribute9');
  }
  public set attribute9(value: string) {
    this._attribute9 = value;
  }
  public resetAttribute9() {
    this._attribute9 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute9Input() {
    return this._attribute9;
  }

  // attribute9expr - computed: true, optional: true, required: false
  private _attribute9Expr?: string; 
  public get attribute9Expr() {
    return this.getStringAttribute('attribute9expr');
  }
  public set attribute9Expr(value: string) {
    this._attribute9Expr = value;
  }
  public resetAttribute9Expr() {
    this._attribute9Expr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute9ExprInput() {
    return this._attribute9Expr;
  }

  // attribute9format - computed: true, optional: true, required: false
  private _attribute9Format?: string; 
  public get attribute9Format() {
    return this.getStringAttribute('attribute9format');
  }
  public set attribute9Format(value: string) {
    this._attribute9Format = value;
  }
  public resetAttribute9Format() {
    this._attribute9Format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute9FormatInput() {
    return this._attribute9Format;
  }

  // attribute9friendlyname - computed: true, optional: true, required: false
  private _attribute9Friendlyname?: string; 
  public get attribute9Friendlyname() {
    return this.getStringAttribute('attribute9friendlyname');
  }
  public set attribute9Friendlyname(value: string) {
    this._attribute9Friendlyname = value;
  }
  public resetAttribute9Friendlyname() {
    this._attribute9Friendlyname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute9FriendlynameInput() {
    return this._attribute9Friendlyname;
  }

  // audience - computed: true, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // digestmethod - computed: true, optional: true, required: false
  private _digestmethod?: string; 
  public get digestmethod() {
    return this.getStringAttribute('digestmethod');
  }
  public set digestmethod(value: string) {
    this._digestmethod = value;
  }
  public resetDigestmethod() {
    this._digestmethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digestmethodInput() {
    return this._digestmethod;
  }

  // encryptassertion - computed: true, optional: true, required: false
  private _encryptassertion?: string; 
  public get encryptassertion() {
    return this.getStringAttribute('encryptassertion');
  }
  public set encryptassertion(value: string) {
    this._encryptassertion = value;
  }
  public resetEncryptassertion() {
    this._encryptassertion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptassertionInput() {
    return this._encryptassertion;
  }

  // encryptionalgorithm - computed: true, optional: true, required: false
  private _encryptionalgorithm?: string; 
  public get encryptionalgorithm() {
    return this.getStringAttribute('encryptionalgorithm');
  }
  public set encryptionalgorithm(value: string) {
    this._encryptionalgorithm = value;
  }
  public resetEncryptionalgorithm() {
    this._encryptionalgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionalgorithmInput() {
    return this._encryptionalgorithm;
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

  // nameidexpr - computed: true, optional: true, required: false
  private _nameidexpr?: string; 
  public get nameidexpr() {
    return this.getStringAttribute('nameidexpr');
  }
  public set nameidexpr(value: string) {
    this._nameidexpr = value;
  }
  public resetNameidexpr() {
    this._nameidexpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameidexprInput() {
    return this._nameidexpr;
  }

  // nameidformat - computed: true, optional: true, required: false
  private _nameidformat?: string; 
  public get nameidformat() {
    return this.getStringAttribute('nameidformat');
  }
  public set nameidformat(value: string) {
    this._nameidformat = value;
  }
  public resetNameidformat() {
    this._nameidformat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameidformatInput() {
    return this._nameidformat;
  }

  // relaystaterule - computed: true, optional: true, required: false
  private _relaystaterule?: string; 
  public get relaystaterule() {
    return this.getStringAttribute('relaystaterule');
  }
  public set relaystaterule(value: string) {
    this._relaystaterule = value;
  }
  public resetRelaystaterule() {
    this._relaystaterule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relaystateruleInput() {
    return this._relaystaterule;
  }

  // samlissuername - computed: true, optional: true, required: false
  private _samlissuername?: string; 
  public get samlissuername() {
    return this.getStringAttribute('samlissuername');
  }
  public set samlissuername(value: string) {
    this._samlissuername = value;
  }
  public resetSamlissuername() {
    this._samlissuername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlissuernameInput() {
    return this._samlissuername;
  }

  // samlsigningcertname - computed: true, optional: true, required: false
  private _samlsigningcertname?: string; 
  public get samlsigningcertname() {
    return this.getStringAttribute('samlsigningcertname');
  }
  public set samlsigningcertname(value: string) {
    this._samlsigningcertname = value;
  }
  public resetSamlsigningcertname() {
    this._samlsigningcertname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlsigningcertnameInput() {
    return this._samlsigningcertname;
  }

  // samlspcertname - computed: true, optional: true, required: false
  private _samlspcertname?: string; 
  public get samlspcertname() {
    return this.getStringAttribute('samlspcertname');
  }
  public set samlspcertname(value: string) {
    this._samlspcertname = value;
  }
  public resetSamlspcertname() {
    this._samlspcertname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlspcertnameInput() {
    return this._samlspcertname;
  }

  // sendpassword - computed: true, optional: true, required: false
  private _sendpassword?: string; 
  public get sendpassword() {
    return this.getStringAttribute('sendpassword');
  }
  public set sendpassword(value: string) {
    this._sendpassword = value;
  }
  public resetSendpassword() {
    this._sendpassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendpasswordInput() {
    return this._sendpassword;
  }

  // signassertion - computed: true, optional: true, required: false
  private _signassertion?: string; 
  public get signassertion() {
    return this.getStringAttribute('signassertion');
  }
  public set signassertion(value: string) {
    this._signassertion = value;
  }
  public resetSignassertion() {
    this._signassertion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signassertionInput() {
    return this._signassertion;
  }

  // signaturealg - computed: true, optional: true, required: false
  private _signaturealg?: string; 
  public get signaturealg() {
    return this.getStringAttribute('signaturealg');
  }
  public set signaturealg(value: string) {
    this._signaturealg = value;
  }
  public resetSignaturealg() {
    this._signaturealg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signaturealgInput() {
    return this._signaturealg;
  }

  // signatureservice - computed: true, optional: true, required: false
  private _signatureservice?: string; 
  public get signatureservice() {
    return this.getStringAttribute('signatureservice');
  }
  public set signatureservice(value: string) {
    this._signatureservice = value;
  }
  public resetSignatureservice() {
    this._signatureservice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureserviceInput() {
    return this._signatureservice;
  }

  // skewtime - computed: true, optional: true, required: false
  private _skewtime?: number; 
  public get skewtime() {
    return this.getNumberAttribute('skewtime');
  }
  public set skewtime(value: number) {
    this._skewtime = value;
  }
  public resetSkewtime() {
    this._skewtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skewtimeInput() {
    return this._skewtime;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assertionconsumerserviceurl: cdktf.stringToTerraform(this._assertionconsumerserviceurl),
      attribute1: cdktf.stringToTerraform(this._attribute1),
      attribute10: cdktf.stringToTerraform(this._attribute10),
      attribute10expr: cdktf.stringToTerraform(this._attribute10Expr),
      attribute10format: cdktf.stringToTerraform(this._attribute10Format),
      attribute10friendlyname: cdktf.stringToTerraform(this._attribute10Friendlyname),
      attribute11: cdktf.stringToTerraform(this._attribute11),
      attribute11expr: cdktf.stringToTerraform(this._attribute11Expr),
      attribute11format: cdktf.stringToTerraform(this._attribute11Format),
      attribute11friendlyname: cdktf.stringToTerraform(this._attribute11Friendlyname),
      attribute12: cdktf.stringToTerraform(this._attribute12),
      attribute12expr: cdktf.stringToTerraform(this._attribute12Expr),
      attribute12format: cdktf.stringToTerraform(this._attribute12Format),
      attribute12friendlyname: cdktf.stringToTerraform(this._attribute12Friendlyname),
      attribute13: cdktf.stringToTerraform(this._attribute13),
      attribute13expr: cdktf.stringToTerraform(this._attribute13Expr),
      attribute13format: cdktf.stringToTerraform(this._attribute13Format),
      attribute13friendlyname: cdktf.stringToTerraform(this._attribute13Friendlyname),
      attribute14: cdktf.stringToTerraform(this._attribute14),
      attribute14expr: cdktf.stringToTerraform(this._attribute14Expr),
      attribute14format: cdktf.stringToTerraform(this._attribute14Format),
      attribute14friendlyname: cdktf.stringToTerraform(this._attribute14Friendlyname),
      attribute15: cdktf.stringToTerraform(this._attribute15),
      attribute15expr: cdktf.stringToTerraform(this._attribute15Expr),
      attribute15format: cdktf.stringToTerraform(this._attribute15Format),
      attribute15friendlyname: cdktf.stringToTerraform(this._attribute15Friendlyname),
      attribute16: cdktf.stringToTerraform(this._attribute16),
      attribute16expr: cdktf.stringToTerraform(this._attribute16Expr),
      attribute16format: cdktf.stringToTerraform(this._attribute16Format),
      attribute16friendlyname: cdktf.stringToTerraform(this._attribute16Friendlyname),
      attribute1expr: cdktf.stringToTerraform(this._attribute1Expr),
      attribute1format: cdktf.stringToTerraform(this._attribute1Format),
      attribute1friendlyname: cdktf.stringToTerraform(this._attribute1Friendlyname),
      attribute2: cdktf.stringToTerraform(this._attribute2),
      attribute2expr: cdktf.stringToTerraform(this._attribute2Expr),
      attribute2format: cdktf.stringToTerraform(this._attribute2Format),
      attribute2friendlyname: cdktf.stringToTerraform(this._attribute2Friendlyname),
      attribute3: cdktf.stringToTerraform(this._attribute3),
      attribute3expr: cdktf.stringToTerraform(this._attribute3Expr),
      attribute3format: cdktf.stringToTerraform(this._attribute3Format),
      attribute3friendlyname: cdktf.stringToTerraform(this._attribute3Friendlyname),
      attribute4: cdktf.stringToTerraform(this._attribute4),
      attribute4expr: cdktf.stringToTerraform(this._attribute4Expr),
      attribute4format: cdktf.stringToTerraform(this._attribute4Format),
      attribute4friendlyname: cdktf.stringToTerraform(this._attribute4Friendlyname),
      attribute5: cdktf.stringToTerraform(this._attribute5),
      attribute5expr: cdktf.stringToTerraform(this._attribute5Expr),
      attribute5format: cdktf.stringToTerraform(this._attribute5Format),
      attribute5friendlyname: cdktf.stringToTerraform(this._attribute5Friendlyname),
      attribute6: cdktf.stringToTerraform(this._attribute6),
      attribute6expr: cdktf.stringToTerraform(this._attribute6Expr),
      attribute6format: cdktf.stringToTerraform(this._attribute6Format),
      attribute6friendlyname: cdktf.stringToTerraform(this._attribute6Friendlyname),
      attribute7: cdktf.stringToTerraform(this._attribute7),
      attribute7expr: cdktf.stringToTerraform(this._attribute7Expr),
      attribute7format: cdktf.stringToTerraform(this._attribute7Format),
      attribute7friendlyname: cdktf.stringToTerraform(this._attribute7Friendlyname),
      attribute8: cdktf.stringToTerraform(this._attribute8),
      attribute8expr: cdktf.stringToTerraform(this._attribute8Expr),
      attribute8format: cdktf.stringToTerraform(this._attribute8Format),
      attribute8friendlyname: cdktf.stringToTerraform(this._attribute8Friendlyname),
      attribute9: cdktf.stringToTerraform(this._attribute9),
      attribute9expr: cdktf.stringToTerraform(this._attribute9Expr),
      attribute9format: cdktf.stringToTerraform(this._attribute9Format),
      attribute9friendlyname: cdktf.stringToTerraform(this._attribute9Friendlyname),
      audience: cdktf.stringToTerraform(this._audience),
      digestmethod: cdktf.stringToTerraform(this._digestmethod),
      encryptassertion: cdktf.stringToTerraform(this._encryptassertion),
      encryptionalgorithm: cdktf.stringToTerraform(this._encryptionalgorithm),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      nameidexpr: cdktf.stringToTerraform(this._nameidexpr),
      nameidformat: cdktf.stringToTerraform(this._nameidformat),
      relaystaterule: cdktf.stringToTerraform(this._relaystaterule),
      samlissuername: cdktf.stringToTerraform(this._samlissuername),
      samlsigningcertname: cdktf.stringToTerraform(this._samlsigningcertname),
      samlspcertname: cdktf.stringToTerraform(this._samlspcertname),
      sendpassword: cdktf.stringToTerraform(this._sendpassword),
      signassertion: cdktf.stringToTerraform(this._signassertion),
      signaturealg: cdktf.stringToTerraform(this._signaturealg),
      signatureservice: cdktf.stringToTerraform(this._signatureservice),
      skewtime: cdktf.numberToTerraform(this._skewtime),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assertionconsumerserviceurl: {
        value: cdktf.stringToHclTerraform(this._assertionconsumerserviceurl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute1: {
        value: cdktf.stringToHclTerraform(this._attribute1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute10: {
        value: cdktf.stringToHclTerraform(this._attribute10),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute10expr: {
        value: cdktf.stringToHclTerraform(this._attribute10Expr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute10format: {
        value: cdktf.stringToHclTerraform(this._attribute10Format),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute10friendlyname: {
        value: cdktf.stringToHclTerraform(this._attribute10Friendlyname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute11: {
        value: cdktf.stringToHclTerraform(this._attribute11),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute11expr: {
        value: cdktf.stringToHclTerraform(this._attribute11Expr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute11format: {
        value: cdktf.stringToHclTerraform(this._attribute11Format),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute11friendlyname: {
        value: cdktf.stringToHclTerraform(this._attribute11Friendlyname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute12: {
        value: cdktf.stringToHclTerraform(this._attribute12),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute12expr: {
        value: cdktf.stringToHclTerraform(this._attribute12Expr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute12format: {
        value: cdktf.stringToHclTerraform(this._attribute12Format),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute12friendlyname: {
        value: cdktf.stringToHclTerraform(this._attribute12Friendlyname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute13: {
        value: cdktf.stringToHclTerraform(this._attribute13),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute13expr: {
        value: cdktf.stringToHclTerraform(this._attribute13Expr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute13format: {
        value: cdktf.stringToHclTerraform(this._attribute13Format),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute13friendlyname: {
        value: cdktf.stringToHclTerraform(this._attribute13Friendlyname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute14: {
        value: cdktf.stringToHclTerraform(this._attribute14),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute14expr: {
        value: cdktf.stringToHclTerraform(this._attribute14Expr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute14format: {
        value: cdktf.stringToHclTerraform(this._attribute14Format),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute14friendlyname: {
        value: cdktf.stringToHclTerraform(this._attribute14Friendlyname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute15: {
        value: cdktf.stringToHclTerraform(this._attribute15),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute15expr: {
        value: cdktf.stringToHclTerraform(this._attribute15Expr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute15format: {
        value: cdktf.stringToHclTerraform(this._attribute15Format),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute15friendlyname: {
        value: cdktf.stringToHclTerraform(this._attribute15Friendlyname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute16: {
        value: cdktf.stringToHclTerraform(this._attribute16),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute16expr: {
        value: cdktf.stringToHclTerraform(this._attribute16Expr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute16format: {
        value: cdktf.stringToHclTerraform(this._attribute16Format),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute16friendlyname: {
        value: cdktf.stringToHclTerraform(this._attribute16Friendlyname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute1expr: {
        value: cdktf.stringToHclTerraform(this._attribute1Expr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute1format: {
        value: cdktf.stringToHclTerraform(this._attribute1Format),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute1friendlyname: {
        value: cdktf.stringToHclTerraform(this._attribute1Friendlyname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute2: {
        value: cdktf.stringToHclTerraform(this._attribute2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute2expr: {
        value: cdktf.stringToHclTerraform(this._attribute2Expr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute2format: {
        value: cdktf.stringToHclTerraform(this._attribute2Format),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute2friendlyname: {
        value: cdktf.stringToHclTerraform(this._attribute2Friendlyname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute3: {
        value: cdktf.stringToHclTerraform(this._attribute3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute3expr: {
        value: cdktf.stringToHclTerraform(this._attribute3Expr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute3format: {
        value: cdktf.stringToHclTerraform(this._attribute3Format),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute3friendlyname: {
        value: cdktf.stringToHclTerraform(this._attribute3Friendlyname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute4: {
        value: cdktf.stringToHclTerraform(this._attribute4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute4expr: {
        value: cdktf.stringToHclTerraform(this._attribute4Expr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute4format: {
        value: cdktf.stringToHclTerraform(this._attribute4Format),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute4friendlyname: {
        value: cdktf.stringToHclTerraform(this._attribute4Friendlyname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute5: {
        value: cdktf.stringToHclTerraform(this._attribute5),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute5expr: {
        value: cdktf.stringToHclTerraform(this._attribute5Expr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute5format: {
        value: cdktf.stringToHclTerraform(this._attribute5Format),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute5friendlyname: {
        value: cdktf.stringToHclTerraform(this._attribute5Friendlyname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute6: {
        value: cdktf.stringToHclTerraform(this._attribute6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute6expr: {
        value: cdktf.stringToHclTerraform(this._attribute6Expr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute6format: {
        value: cdktf.stringToHclTerraform(this._attribute6Format),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute6friendlyname: {
        value: cdktf.stringToHclTerraform(this._attribute6Friendlyname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute7: {
        value: cdktf.stringToHclTerraform(this._attribute7),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute7expr: {
        value: cdktf.stringToHclTerraform(this._attribute7Expr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute7format: {
        value: cdktf.stringToHclTerraform(this._attribute7Format),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute7friendlyname: {
        value: cdktf.stringToHclTerraform(this._attribute7Friendlyname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute8: {
        value: cdktf.stringToHclTerraform(this._attribute8),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute8expr: {
        value: cdktf.stringToHclTerraform(this._attribute8Expr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute8format: {
        value: cdktf.stringToHclTerraform(this._attribute8Format),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute8friendlyname: {
        value: cdktf.stringToHclTerraform(this._attribute8Friendlyname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute9: {
        value: cdktf.stringToHclTerraform(this._attribute9),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute9expr: {
        value: cdktf.stringToHclTerraform(this._attribute9Expr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute9format: {
        value: cdktf.stringToHclTerraform(this._attribute9Format),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute9friendlyname: {
        value: cdktf.stringToHclTerraform(this._attribute9Friendlyname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      audience: {
        value: cdktf.stringToHclTerraform(this._audience),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      digestmethod: {
        value: cdktf.stringToHclTerraform(this._digestmethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryptassertion: {
        value: cdktf.stringToHclTerraform(this._encryptassertion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryptionalgorithm: {
        value: cdktf.stringToHclTerraform(this._encryptionalgorithm),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nameidexpr: {
        value: cdktf.stringToHclTerraform(this._nameidexpr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nameidformat: {
        value: cdktf.stringToHclTerraform(this._nameidformat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relaystaterule: {
        value: cdktf.stringToHclTerraform(this._relaystaterule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      samlissuername: {
        value: cdktf.stringToHclTerraform(this._samlissuername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      samlsigningcertname: {
        value: cdktf.stringToHclTerraform(this._samlsigningcertname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      samlspcertname: {
        value: cdktf.stringToHclTerraform(this._samlspcertname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sendpassword: {
        value: cdktf.stringToHclTerraform(this._sendpassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signassertion: {
        value: cdktf.stringToHclTerraform(this._signassertion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signaturealg: {
        value: cdktf.stringToHclTerraform(this._signaturealg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signatureservice: {
        value: cdktf.stringToHclTerraform(this._signatureservice),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skewtime: {
        value: cdktf.numberToHclTerraform(this._skewtime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
