// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/gaap_domain_error_page
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GaapDomainErrorPageConfig extends cdktf.TerraformMetaArguments {
  /**
  * New response body.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/gaap_domain_error_page#body GaapDomainErrorPage#body}
  */
  readonly body: string;
  /**
  * Response headers to be removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/gaap_domain_error_page#clear_headers GaapDomainErrorPage#clear_headers}
  */
  readonly clearHeaders?: string[];
  /**
  * HTTP domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/gaap_domain_error_page#domain GaapDomainErrorPage#domain}
  */
  readonly domain: string;
  /**
  * Original error codes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/gaap_domain_error_page#error_codes GaapDomainErrorPage#error_codes}
  */
  readonly errorCodes: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/gaap_domain_error_page#id GaapDomainErrorPage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the layer7 listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/gaap_domain_error_page#listener_id GaapDomainErrorPage#listener_id}
  */
  readonly listenerId: string;
  /**
  * New error code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/gaap_domain_error_page#new_error_code GaapDomainErrorPage#new_error_code}
  */
  readonly newErrorCode?: number;
  /**
  * Response headers to be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/gaap_domain_error_page#set_headers GaapDomainErrorPage#set_headers}
  */
  readonly setHeaders?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/gaap_domain_error_page tencentcloud_gaap_domain_error_page}
*/
export class GaapDomainErrorPage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_gaap_domain_error_page";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GaapDomainErrorPage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GaapDomainErrorPage to import
  * @param importFromId The id of the existing GaapDomainErrorPage that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/gaap_domain_error_page#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GaapDomainErrorPage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_gaap_domain_error_page", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/gaap_domain_error_page tencentcloud_gaap_domain_error_page} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GaapDomainErrorPageConfig
  */
  public constructor(scope: Construct, id: string, config: GaapDomainErrorPageConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_gaap_domain_error_page',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.47',
        providerVersionConstraint: '1.82.47'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._body = config.body;
    this._clearHeaders = config.clearHeaders;
    this._domain = config.domain;
    this._errorCodes = config.errorCodes;
    this._id = config.id;
    this._listenerId = config.listenerId;
    this._newErrorCode = config.newErrorCode;
    this._setHeaders = config.setHeaders;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // body - computed: false, optional: false, required: true
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // clear_headers - computed: false, optional: true, required: false
  private _clearHeaders?: string[]; 
  public get clearHeaders() {
    return cdktf.Fn.tolist(this.getListAttribute('clear_headers'));
  }
  public set clearHeaders(value: string[]) {
    this._clearHeaders = value;
  }
  public resetClearHeaders() {
    this._clearHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearHeadersInput() {
    return this._clearHeaders;
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // error_codes - computed: false, optional: false, required: true
  private _errorCodes?: number[]; 
  public get errorCodes() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('error_codes')));
  }
  public set errorCodes(value: number[]) {
    this._errorCodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get errorCodesInput() {
    return this._errorCodes;
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

  // listener_id - computed: false, optional: false, required: true
  private _listenerId?: string; 
  public get listenerId() {
    return this.getStringAttribute('listener_id');
  }
  public set listenerId(value: string) {
    this._listenerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerIdInput() {
    return this._listenerId;
  }

  // new_error_code - computed: false, optional: true, required: false
  private _newErrorCode?: number; 
  public get newErrorCode() {
    return this.getNumberAttribute('new_error_code');
  }
  public set newErrorCode(value: number) {
    this._newErrorCode = value;
  }
  public resetNewErrorCode() {
    this._newErrorCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newErrorCodeInput() {
    return this._newErrorCode;
  }

  // set_headers - computed: false, optional: true, required: false
  private _setHeaders?: { [key: string]: string }; 
  public get setHeaders() {
    return this.getStringMapAttribute('set_headers');
  }
  public set setHeaders(value: { [key: string]: string }) {
    this._setHeaders = value;
  }
  public resetSetHeaders() {
    this._setHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setHeadersInput() {
    return this._setHeaders;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      body: cdktf.stringToTerraform(this._body),
      clear_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clearHeaders),
      domain: cdktf.stringToTerraform(this._domain),
      error_codes: cdktf.listMapper(cdktf.numberToTerraform, false)(this._errorCodes),
      id: cdktf.stringToTerraform(this._id),
      listener_id: cdktf.stringToTerraform(this._listenerId),
      new_error_code: cdktf.numberToTerraform(this._newErrorCode),
      set_headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._setHeaders),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      body: {
        value: cdktf.stringToHclTerraform(this._body),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clear_headers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._clearHeaders),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      error_codes: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._errorCodes),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      listener_id: {
        value: cdktf.stringToHclTerraform(this._listenerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      new_error_code: {
        value: cdktf.numberToHclTerraform(this._newErrorCode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      set_headers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._setHeaders),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
