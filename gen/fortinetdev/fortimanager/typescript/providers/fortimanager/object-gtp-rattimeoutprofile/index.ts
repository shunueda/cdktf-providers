// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_gtp_rattimeoutprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectGtpRattimeoutprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_gtp_rattimeoutprofile#adom ObjectGtpRattimeoutprofile#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_gtp_rattimeoutprofile#eutran_timeout ObjectGtpRattimeoutprofile#eutran_timeout}
  */
  readonly eutranTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_gtp_rattimeoutprofile#gan_timeout ObjectGtpRattimeoutprofile#gan_timeout}
  */
  readonly ganTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_gtp_rattimeoutprofile#geran_timeout ObjectGtpRattimeoutprofile#geran_timeout}
  */
  readonly geranTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_gtp_rattimeoutprofile#hspa_timeout ObjectGtpRattimeoutprofile#hspa_timeout}
  */
  readonly hspaTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_gtp_rattimeoutprofile#id ObjectGtpRattimeoutprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_gtp_rattimeoutprofile#ltem_timeout ObjectGtpRattimeoutprofile#ltem_timeout}
  */
  readonly ltemTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_gtp_rattimeoutprofile#name ObjectGtpRattimeoutprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_gtp_rattimeoutprofile#nbiot_timeout ObjectGtpRattimeoutprofile#nbiot_timeout}
  */
  readonly nbiotTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_gtp_rattimeoutprofile#nr_timeout ObjectGtpRattimeoutprofile#nr_timeout}
  */
  readonly nrTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_gtp_rattimeoutprofile#scopetype ObjectGtpRattimeoutprofile#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_gtp_rattimeoutprofile#utran_timeout ObjectGtpRattimeoutprofile#utran_timeout}
  */
  readonly utranTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_gtp_rattimeoutprofile#virtual_timeout ObjectGtpRattimeoutprofile#virtual_timeout}
  */
  readonly virtualTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_gtp_rattimeoutprofile#wlan_timeout ObjectGtpRattimeoutprofile#wlan_timeout}
  */
  readonly wlanTimeout?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_gtp_rattimeoutprofile fortimanager_object_gtp_rattimeoutprofile}
*/
export class ObjectGtpRattimeoutprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_gtp_rattimeoutprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectGtpRattimeoutprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectGtpRattimeoutprofile to import
  * @param importFromId The id of the existing ObjectGtpRattimeoutprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_gtp_rattimeoutprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectGtpRattimeoutprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_gtp_rattimeoutprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_gtp_rattimeoutprofile fortimanager_object_gtp_rattimeoutprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectGtpRattimeoutprofileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectGtpRattimeoutprofileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_gtp_rattimeoutprofile',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._eutranTimeout = config.eutranTimeout;
    this._ganTimeout = config.ganTimeout;
    this._geranTimeout = config.geranTimeout;
    this._hspaTimeout = config.hspaTimeout;
    this._id = config.id;
    this._ltemTimeout = config.ltemTimeout;
    this._name = config.name;
    this._nbiotTimeout = config.nbiotTimeout;
    this._nrTimeout = config.nrTimeout;
    this._scopetype = config.scopetype;
    this._utranTimeout = config.utranTimeout;
    this._virtualTimeout = config.virtualTimeout;
    this._wlanTimeout = config.wlanTimeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // eutran_timeout - computed: false, optional: true, required: false
  private _eutranTimeout?: number; 
  public get eutranTimeout() {
    return this.getNumberAttribute('eutran_timeout');
  }
  public set eutranTimeout(value: number) {
    this._eutranTimeout = value;
  }
  public resetEutranTimeout() {
    this._eutranTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eutranTimeoutInput() {
    return this._eutranTimeout;
  }

  // gan_timeout - computed: false, optional: true, required: false
  private _ganTimeout?: number; 
  public get ganTimeout() {
    return this.getNumberAttribute('gan_timeout');
  }
  public set ganTimeout(value: number) {
    this._ganTimeout = value;
  }
  public resetGanTimeout() {
    this._ganTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ganTimeoutInput() {
    return this._ganTimeout;
  }

  // geran_timeout - computed: false, optional: true, required: false
  private _geranTimeout?: number; 
  public get geranTimeout() {
    return this.getNumberAttribute('geran_timeout');
  }
  public set geranTimeout(value: number) {
    this._geranTimeout = value;
  }
  public resetGeranTimeout() {
    this._geranTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geranTimeoutInput() {
    return this._geranTimeout;
  }

  // hspa_timeout - computed: false, optional: true, required: false
  private _hspaTimeout?: number; 
  public get hspaTimeout() {
    return this.getNumberAttribute('hspa_timeout');
  }
  public set hspaTimeout(value: number) {
    this._hspaTimeout = value;
  }
  public resetHspaTimeout() {
    this._hspaTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hspaTimeoutInput() {
    return this._hspaTimeout;
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

  // ltem_timeout - computed: false, optional: true, required: false
  private _ltemTimeout?: number; 
  public get ltemTimeout() {
    return this.getNumberAttribute('ltem_timeout');
  }
  public set ltemTimeout(value: number) {
    this._ltemTimeout = value;
  }
  public resetLtemTimeout() {
    this._ltemTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ltemTimeoutInput() {
    return this._ltemTimeout;
  }

  // name - computed: false, optional: true, required: false
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

  // nbiot_timeout - computed: false, optional: true, required: false
  private _nbiotTimeout?: number; 
  public get nbiotTimeout() {
    return this.getNumberAttribute('nbiot_timeout');
  }
  public set nbiotTimeout(value: number) {
    this._nbiotTimeout = value;
  }
  public resetNbiotTimeout() {
    this._nbiotTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nbiotTimeoutInput() {
    return this._nbiotTimeout;
  }

  // nr_timeout - computed: false, optional: true, required: false
  private _nrTimeout?: number; 
  public get nrTimeout() {
    return this.getNumberAttribute('nr_timeout');
  }
  public set nrTimeout(value: number) {
    this._nrTimeout = value;
  }
  public resetNrTimeout() {
    this._nrTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nrTimeoutInput() {
    return this._nrTimeout;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // utran_timeout - computed: false, optional: true, required: false
  private _utranTimeout?: number; 
  public get utranTimeout() {
    return this.getNumberAttribute('utran_timeout');
  }
  public set utranTimeout(value: number) {
    this._utranTimeout = value;
  }
  public resetUtranTimeout() {
    this._utranTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utranTimeoutInput() {
    return this._utranTimeout;
  }

  // virtual_timeout - computed: false, optional: true, required: false
  private _virtualTimeout?: number; 
  public get virtualTimeout() {
    return this.getNumberAttribute('virtual_timeout');
  }
  public set virtualTimeout(value: number) {
    this._virtualTimeout = value;
  }
  public resetVirtualTimeout() {
    this._virtualTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualTimeoutInput() {
    return this._virtualTimeout;
  }

  // wlan_timeout - computed: false, optional: true, required: false
  private _wlanTimeout?: number; 
  public get wlanTimeout() {
    return this.getNumberAttribute('wlan_timeout');
  }
  public set wlanTimeout(value: number) {
    this._wlanTimeout = value;
  }
  public resetWlanTimeout() {
    this._wlanTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wlanTimeoutInput() {
    return this._wlanTimeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      eutran_timeout: cdktf.numberToTerraform(this._eutranTimeout),
      gan_timeout: cdktf.numberToTerraform(this._ganTimeout),
      geran_timeout: cdktf.numberToTerraform(this._geranTimeout),
      hspa_timeout: cdktf.numberToTerraform(this._hspaTimeout),
      id: cdktf.stringToTerraform(this._id),
      ltem_timeout: cdktf.numberToTerraform(this._ltemTimeout),
      name: cdktf.stringToTerraform(this._name),
      nbiot_timeout: cdktf.numberToTerraform(this._nbiotTimeout),
      nr_timeout: cdktf.numberToTerraform(this._nrTimeout),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      utran_timeout: cdktf.numberToTerraform(this._utranTimeout),
      virtual_timeout: cdktf.numberToTerraform(this._virtualTimeout),
      wlan_timeout: cdktf.numberToTerraform(this._wlanTimeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eutran_timeout: {
        value: cdktf.numberToHclTerraform(this._eutranTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gan_timeout: {
        value: cdktf.numberToHclTerraform(this._ganTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      geran_timeout: {
        value: cdktf.numberToHclTerraform(this._geranTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hspa_timeout: {
        value: cdktf.numberToHclTerraform(this._hspaTimeout),
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
      ltem_timeout: {
        value: cdktf.numberToHclTerraform(this._ltemTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nbiot_timeout: {
        value: cdktf.numberToHclTerraform(this._nbiotTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nr_timeout: {
        value: cdktf.numberToHclTerraform(this._nrTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      utran_timeout: {
        value: cdktf.numberToHclTerraform(this._utranTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      virtual_timeout: {
        value: cdktf.numberToHclTerraform(this._virtualTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wlan_timeout: {
        value: cdktf.numberToHclTerraform(this._wlanTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
