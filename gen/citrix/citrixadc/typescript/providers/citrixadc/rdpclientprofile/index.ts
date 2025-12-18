// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rdpclientprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RdpclientprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rdpclientprofile#addusernameinrdpfile Rdpclientprofile#addusernameinrdpfile}
  */
  readonly addusernameinrdpfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rdpclientprofile#audiocapturemode Rdpclientprofile#audiocapturemode}
  */
  readonly audiocapturemode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rdpclientprofile#id Rdpclientprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rdpclientprofile#keyboardhook Rdpclientprofile#keyboardhook}
  */
  readonly keyboardhook?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rdpclientprofile#multimonitorsupport Rdpclientprofile#multimonitorsupport}
  */
  readonly multimonitorsupport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rdpclientprofile#name Rdpclientprofile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rdpclientprofile#psk Rdpclientprofile#psk}
  */
  readonly psk?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rdpclientprofile#randomizerdpfilename Rdpclientprofile#randomizerdpfilename}
  */
  readonly randomizerdpfilename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rdpclientprofile#rdpcookievalidity Rdpclientprofile#rdpcookievalidity}
  */
  readonly rdpcookievalidity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rdpclientprofile#rdpcustomparams Rdpclientprofile#rdpcustomparams}
  */
  readonly rdpcustomparams?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rdpclientprofile#rdpfilename Rdpclientprofile#rdpfilename}
  */
  readonly rdpfilename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rdpclientprofile#rdphost Rdpclientprofile#rdphost}
  */
  readonly rdphost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rdpclientprofile#rdplinkattribute Rdpclientprofile#rdplinkattribute}
  */
  readonly rdplinkattribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rdpclientprofile#rdplistener Rdpclientprofile#rdplistener}
  */
  readonly rdplistener?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rdpclientprofile#rdpurloverride Rdpclientprofile#rdpurloverride}
  */
  readonly rdpurloverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rdpclientprofile#rdpvalidateclientip Rdpclientprofile#rdpvalidateclientip}
  */
  readonly rdpvalidateclientip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rdpclientprofile#redirectclipboard Rdpclientprofile#redirectclipboard}
  */
  readonly redirectclipboard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rdpclientprofile#redirectcomports Rdpclientprofile#redirectcomports}
  */
  readonly redirectcomports?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rdpclientprofile#redirectdrives Rdpclientprofile#redirectdrives}
  */
  readonly redirectdrives?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rdpclientprofile#redirectpnpdevices Rdpclientprofile#redirectpnpdevices}
  */
  readonly redirectpnpdevices?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rdpclientprofile#redirectprinters Rdpclientprofile#redirectprinters}
  */
  readonly redirectprinters?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rdpclientprofile#videoplaybackmode Rdpclientprofile#videoplaybackmode}
  */
  readonly videoplaybackmode?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rdpclientprofile citrixadc_rdpclientprofile}
*/
export class Rdpclientprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_rdpclientprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Rdpclientprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Rdpclientprofile to import
  * @param importFromId The id of the existing Rdpclientprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rdpclientprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Rdpclientprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_rdpclientprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rdpclientprofile citrixadc_rdpclientprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RdpclientprofileConfig
  */
  public constructor(scope: Construct, id: string, config: RdpclientprofileConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_rdpclientprofile',
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
    this._addusernameinrdpfile = config.addusernameinrdpfile;
    this._audiocapturemode = config.audiocapturemode;
    this._id = config.id;
    this._keyboardhook = config.keyboardhook;
    this._multimonitorsupport = config.multimonitorsupport;
    this._name = config.name;
    this._psk = config.psk;
    this._randomizerdpfilename = config.randomizerdpfilename;
    this._rdpcookievalidity = config.rdpcookievalidity;
    this._rdpcustomparams = config.rdpcustomparams;
    this._rdpfilename = config.rdpfilename;
    this._rdphost = config.rdphost;
    this._rdplinkattribute = config.rdplinkattribute;
    this._rdplistener = config.rdplistener;
    this._rdpurloverride = config.rdpurloverride;
    this._rdpvalidateclientip = config.rdpvalidateclientip;
    this._redirectclipboard = config.redirectclipboard;
    this._redirectcomports = config.redirectcomports;
    this._redirectdrives = config.redirectdrives;
    this._redirectpnpdevices = config.redirectpnpdevices;
    this._redirectprinters = config.redirectprinters;
    this._videoplaybackmode = config.videoplaybackmode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addusernameinrdpfile - computed: true, optional: true, required: false
  private _addusernameinrdpfile?: string; 
  public get addusernameinrdpfile() {
    return this.getStringAttribute('addusernameinrdpfile');
  }
  public set addusernameinrdpfile(value: string) {
    this._addusernameinrdpfile = value;
  }
  public resetAddusernameinrdpfile() {
    this._addusernameinrdpfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addusernameinrdpfileInput() {
    return this._addusernameinrdpfile;
  }

  // audiocapturemode - computed: true, optional: true, required: false
  private _audiocapturemode?: string; 
  public get audiocapturemode() {
    return this.getStringAttribute('audiocapturemode');
  }
  public set audiocapturemode(value: string) {
    this._audiocapturemode = value;
  }
  public resetAudiocapturemode() {
    this._audiocapturemode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audiocapturemodeInput() {
    return this._audiocapturemode;
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

  // keyboardhook - computed: true, optional: true, required: false
  private _keyboardhook?: string; 
  public get keyboardhook() {
    return this.getStringAttribute('keyboardhook');
  }
  public set keyboardhook(value: string) {
    this._keyboardhook = value;
  }
  public resetKeyboardhook() {
    this._keyboardhook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyboardhookInput() {
    return this._keyboardhook;
  }

  // multimonitorsupport - computed: true, optional: true, required: false
  private _multimonitorsupport?: string; 
  public get multimonitorsupport() {
    return this.getStringAttribute('multimonitorsupport');
  }
  public set multimonitorsupport(value: string) {
    this._multimonitorsupport = value;
  }
  public resetMultimonitorsupport() {
    this._multimonitorsupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multimonitorsupportInput() {
    return this._multimonitorsupport;
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

  // psk - computed: true, optional: true, required: false
  private _psk?: string; 
  public get psk() {
    return this.getStringAttribute('psk');
  }
  public set psk(value: string) {
    this._psk = value;
  }
  public resetPsk() {
    this._psk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pskInput() {
    return this._psk;
  }

  // randomizerdpfilename - computed: true, optional: true, required: false
  private _randomizerdpfilename?: string; 
  public get randomizerdpfilename() {
    return this.getStringAttribute('randomizerdpfilename');
  }
  public set randomizerdpfilename(value: string) {
    this._randomizerdpfilename = value;
  }
  public resetRandomizerdpfilename() {
    this._randomizerdpfilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get randomizerdpfilenameInput() {
    return this._randomizerdpfilename;
  }

  // rdpcookievalidity - computed: true, optional: true, required: false
  private _rdpcookievalidity?: number; 
  public get rdpcookievalidity() {
    return this.getNumberAttribute('rdpcookievalidity');
  }
  public set rdpcookievalidity(value: number) {
    this._rdpcookievalidity = value;
  }
  public resetRdpcookievalidity() {
    this._rdpcookievalidity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdpcookievalidityInput() {
    return this._rdpcookievalidity;
  }

  // rdpcustomparams - computed: true, optional: true, required: false
  private _rdpcustomparams?: string; 
  public get rdpcustomparams() {
    return this.getStringAttribute('rdpcustomparams');
  }
  public set rdpcustomparams(value: string) {
    this._rdpcustomparams = value;
  }
  public resetRdpcustomparams() {
    this._rdpcustomparams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdpcustomparamsInput() {
    return this._rdpcustomparams;
  }

  // rdpfilename - computed: true, optional: true, required: false
  private _rdpfilename?: string; 
  public get rdpfilename() {
    return this.getStringAttribute('rdpfilename');
  }
  public set rdpfilename(value: string) {
    this._rdpfilename = value;
  }
  public resetRdpfilename() {
    this._rdpfilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdpfilenameInput() {
    return this._rdpfilename;
  }

  // rdphost - computed: true, optional: true, required: false
  private _rdphost?: string; 
  public get rdphost() {
    return this.getStringAttribute('rdphost');
  }
  public set rdphost(value: string) {
    this._rdphost = value;
  }
  public resetRdphost() {
    this._rdphost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdphostInput() {
    return this._rdphost;
  }

  // rdplinkattribute - computed: true, optional: true, required: false
  private _rdplinkattribute?: string; 
  public get rdplinkattribute() {
    return this.getStringAttribute('rdplinkattribute');
  }
  public set rdplinkattribute(value: string) {
    this._rdplinkattribute = value;
  }
  public resetRdplinkattribute() {
    this._rdplinkattribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdplinkattributeInput() {
    return this._rdplinkattribute;
  }

  // rdplistener - computed: true, optional: true, required: false
  private _rdplistener?: string; 
  public get rdplistener() {
    return this.getStringAttribute('rdplistener');
  }
  public set rdplistener(value: string) {
    this._rdplistener = value;
  }
  public resetRdplistener() {
    this._rdplistener = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdplistenerInput() {
    return this._rdplistener;
  }

  // rdpurloverride - computed: true, optional: true, required: false
  private _rdpurloverride?: string; 
  public get rdpurloverride() {
    return this.getStringAttribute('rdpurloverride');
  }
  public set rdpurloverride(value: string) {
    this._rdpurloverride = value;
  }
  public resetRdpurloverride() {
    this._rdpurloverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdpurloverrideInput() {
    return this._rdpurloverride;
  }

  // rdpvalidateclientip - computed: true, optional: true, required: false
  private _rdpvalidateclientip?: string; 
  public get rdpvalidateclientip() {
    return this.getStringAttribute('rdpvalidateclientip');
  }
  public set rdpvalidateclientip(value: string) {
    this._rdpvalidateclientip = value;
  }
  public resetRdpvalidateclientip() {
    this._rdpvalidateclientip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdpvalidateclientipInput() {
    return this._rdpvalidateclientip;
  }

  // redirectclipboard - computed: true, optional: true, required: false
  private _redirectclipboard?: string; 
  public get redirectclipboard() {
    return this.getStringAttribute('redirectclipboard');
  }
  public set redirectclipboard(value: string) {
    this._redirectclipboard = value;
  }
  public resetRedirectclipboard() {
    this._redirectclipboard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectclipboardInput() {
    return this._redirectclipboard;
  }

  // redirectcomports - computed: true, optional: true, required: false
  private _redirectcomports?: string; 
  public get redirectcomports() {
    return this.getStringAttribute('redirectcomports');
  }
  public set redirectcomports(value: string) {
    this._redirectcomports = value;
  }
  public resetRedirectcomports() {
    this._redirectcomports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectcomportsInput() {
    return this._redirectcomports;
  }

  // redirectdrives - computed: true, optional: true, required: false
  private _redirectdrives?: string; 
  public get redirectdrives() {
    return this.getStringAttribute('redirectdrives');
  }
  public set redirectdrives(value: string) {
    this._redirectdrives = value;
  }
  public resetRedirectdrives() {
    this._redirectdrives = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectdrivesInput() {
    return this._redirectdrives;
  }

  // redirectpnpdevices - computed: true, optional: true, required: false
  private _redirectpnpdevices?: string; 
  public get redirectpnpdevices() {
    return this.getStringAttribute('redirectpnpdevices');
  }
  public set redirectpnpdevices(value: string) {
    this._redirectpnpdevices = value;
  }
  public resetRedirectpnpdevices() {
    this._redirectpnpdevices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectpnpdevicesInput() {
    return this._redirectpnpdevices;
  }

  // redirectprinters - computed: true, optional: true, required: false
  private _redirectprinters?: string; 
  public get redirectprinters() {
    return this.getStringAttribute('redirectprinters');
  }
  public set redirectprinters(value: string) {
    this._redirectprinters = value;
  }
  public resetRedirectprinters() {
    this._redirectprinters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectprintersInput() {
    return this._redirectprinters;
  }

  // videoplaybackmode - computed: true, optional: true, required: false
  private _videoplaybackmode?: string; 
  public get videoplaybackmode() {
    return this.getStringAttribute('videoplaybackmode');
  }
  public set videoplaybackmode(value: string) {
    this._videoplaybackmode = value;
  }
  public resetVideoplaybackmode() {
    this._videoplaybackmode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoplaybackmodeInput() {
    return this._videoplaybackmode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      addusernameinrdpfile: cdktf.stringToTerraform(this._addusernameinrdpfile),
      audiocapturemode: cdktf.stringToTerraform(this._audiocapturemode),
      id: cdktf.stringToTerraform(this._id),
      keyboardhook: cdktf.stringToTerraform(this._keyboardhook),
      multimonitorsupport: cdktf.stringToTerraform(this._multimonitorsupport),
      name: cdktf.stringToTerraform(this._name),
      psk: cdktf.stringToTerraform(this._psk),
      randomizerdpfilename: cdktf.stringToTerraform(this._randomizerdpfilename),
      rdpcookievalidity: cdktf.numberToTerraform(this._rdpcookievalidity),
      rdpcustomparams: cdktf.stringToTerraform(this._rdpcustomparams),
      rdpfilename: cdktf.stringToTerraform(this._rdpfilename),
      rdphost: cdktf.stringToTerraform(this._rdphost),
      rdplinkattribute: cdktf.stringToTerraform(this._rdplinkattribute),
      rdplistener: cdktf.stringToTerraform(this._rdplistener),
      rdpurloverride: cdktf.stringToTerraform(this._rdpurloverride),
      rdpvalidateclientip: cdktf.stringToTerraform(this._rdpvalidateclientip),
      redirectclipboard: cdktf.stringToTerraform(this._redirectclipboard),
      redirectcomports: cdktf.stringToTerraform(this._redirectcomports),
      redirectdrives: cdktf.stringToTerraform(this._redirectdrives),
      redirectpnpdevices: cdktf.stringToTerraform(this._redirectpnpdevices),
      redirectprinters: cdktf.stringToTerraform(this._redirectprinters),
      videoplaybackmode: cdktf.stringToTerraform(this._videoplaybackmode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      addusernameinrdpfile: {
        value: cdktf.stringToHclTerraform(this._addusernameinrdpfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      audiocapturemode: {
        value: cdktf.stringToHclTerraform(this._audiocapturemode),
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
      keyboardhook: {
        value: cdktf.stringToHclTerraform(this._keyboardhook),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multimonitorsupport: {
        value: cdktf.stringToHclTerraform(this._multimonitorsupport),
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
      psk: {
        value: cdktf.stringToHclTerraform(this._psk),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      randomizerdpfilename: {
        value: cdktf.stringToHclTerraform(this._randomizerdpfilename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rdpcookievalidity: {
        value: cdktf.numberToHclTerraform(this._rdpcookievalidity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rdpcustomparams: {
        value: cdktf.stringToHclTerraform(this._rdpcustomparams),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rdpfilename: {
        value: cdktf.stringToHclTerraform(this._rdpfilename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rdphost: {
        value: cdktf.stringToHclTerraform(this._rdphost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rdplinkattribute: {
        value: cdktf.stringToHclTerraform(this._rdplinkattribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rdplistener: {
        value: cdktf.stringToHclTerraform(this._rdplistener),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rdpurloverride: {
        value: cdktf.stringToHclTerraform(this._rdpurloverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rdpvalidateclientip: {
        value: cdktf.stringToHclTerraform(this._rdpvalidateclientip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redirectclipboard: {
        value: cdktf.stringToHclTerraform(this._redirectclipboard),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redirectcomports: {
        value: cdktf.stringToHclTerraform(this._redirectcomports),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redirectdrives: {
        value: cdktf.stringToHclTerraform(this._redirectdrives),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redirectpnpdevices: {
        value: cdktf.stringToHclTerraform(this._redirectpnpdevices),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redirectprinters: {
        value: cdktf.stringToHclTerraform(this._redirectprinters),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      videoplaybackmode: {
        value: cdktf.stringToHclTerraform(this._videoplaybackmode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
