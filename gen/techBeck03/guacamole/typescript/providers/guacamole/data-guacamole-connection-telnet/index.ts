// https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/data-sources/connection_telnet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGuacamoleConnectionTelnetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/data-sources/connection_telnet#id DataGuacamoleConnectionTelnet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Numeric identifier of the guacamole connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/data-sources/connection_telnet#identifier DataGuacamoleConnectionTelnet#identifier}
  */
  readonly identifier?: string;
  /**
  * Path of connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/data-sources/connection_telnet#path DataGuacamoleConnectionTelnet#path}
  */
  readonly path?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/data-sources/connection_telnet#parameters DataGuacamoleConnectionTelnet#parameters}
  */
  readonly parameters?: DataGuacamoleConnectionTelnetParameters;
}
export interface DataGuacamoleConnectionTelnetAttributes {
}

export function dataGuacamoleConnectionTelnetAttributesToTerraform(struct?: DataGuacamoleConnectionTelnetAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGuacamoleConnectionTelnetAttributesToHclTerraform(struct?: DataGuacamoleConnectionTelnetAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGuacamoleConnectionTelnetAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGuacamoleConnectionTelnetAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGuacamoleConnectionTelnetAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // failover_only - computed: true, optional: false, required: false
  public get failoverOnly() {
    return this.getBooleanAttribute('failover_only');
  }

  // guacd_encryption - computed: true, optional: false, required: false
  public get guacdEncryption() {
    return this.getStringAttribute('guacd_encryption');
  }

  // guacd_hostname - computed: true, optional: false, required: false
  public get guacdHostname() {
    return this.getStringAttribute('guacd_hostname');
  }

  // guacd_port - computed: true, optional: false, required: false
  public get guacdPort() {
    return this.getStringAttribute('guacd_port');
  }

  // max_connections - computed: true, optional: false, required: false
  public get maxConnections() {
    return this.getStringAttribute('max_connections');
  }

  // max_connections_per_user - computed: true, optional: false, required: false
  public get maxConnectionsPerUser() {
    return this.getStringAttribute('max_connections_per_user');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getStringAttribute('weight');
  }
}

export class DataGuacamoleConnectionTelnetAttributesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGuacamoleConnectionTelnetAttributesOutputReference {
    return new DataGuacamoleConnectionTelnetAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGuacamoleConnectionTelnetParameters {
}

export function dataGuacamoleConnectionTelnetParametersToTerraform(struct?: DataGuacamoleConnectionTelnetParametersOutputReference | DataGuacamoleConnectionTelnetParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGuacamoleConnectionTelnetParametersToHclTerraform(struct?: DataGuacamoleConnectionTelnetParametersOutputReference | DataGuacamoleConnectionTelnetParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGuacamoleConnectionTelnetParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataGuacamoleConnectionTelnetParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGuacamoleConnectionTelnetParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backspace - computed: true, optional: false, required: false
  public get backspace() {
    return this.getStringAttribute('backspace');
  }

  // color_scheme - computed: true, optional: false, required: false
  public get colorScheme() {
    return this.getStringAttribute('color_scheme');
  }

  // disable_copy - computed: true, optional: false, required: false
  public get disableCopy() {
    return this.getBooleanAttribute('disable_copy');
  }

  // disable_paste - computed: true, optional: false, required: false
  public get disablePaste() {
    return this.getBooleanAttribute('disable_paste');
  }

  // font_name - computed: true, optional: false, required: false
  public get fontName() {
    return this.getStringAttribute('font_name');
  }

  // font_size - computed: true, optional: false, required: false
  public get fontSize() {
    return this.getStringAttribute('font_size');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // login_failure_regex - computed: true, optional: false, required: false
  public get loginFailureRegex() {
    return this.getStringAttribute('login_failure_regex');
  }

  // login_success_regex - computed: true, optional: false, required: false
  public get loginSuccessRegex() {
    return this.getStringAttribute('login_success_regex');
  }

  // max_scrollback_size - computed: true, optional: false, required: false
  public get maxScrollbackSize() {
    return this.getStringAttribute('max_scrollback_size');
  }

  // password_regex - computed: true, optional: false, required: false
  public get passwordRegex() {
    return this.getStringAttribute('password_regex');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // readonly - computed: true, optional: false, required: false
  public get readonly() {
    return this.getBooleanAttribute('readonly');
  }

  // recording_auto_create_path - computed: true, optional: false, required: false
  public get recordingAutoCreatePath() {
    return this.getBooleanAttribute('recording_auto_create_path');
  }

  // recording_exclude_mouse - computed: true, optional: false, required: false
  public get recordingExcludeMouse() {
    return this.getBooleanAttribute('recording_exclude_mouse');
  }

  // recording_exclude_output - computed: true, optional: false, required: false
  public get recordingExcludeOutput() {
    return this.getBooleanAttribute('recording_exclude_output');
  }

  // recording_include_keys - computed: true, optional: false, required: false
  public get recordingIncludeKeys() {
    return this.getBooleanAttribute('recording_include_keys');
  }

  // recording_name - computed: true, optional: false, required: false
  public get recordingName() {
    return this.getStringAttribute('recording_name');
  }

  // recording_path - computed: true, optional: false, required: false
  public get recordingPath() {
    return this.getStringAttribute('recording_path');
  }

  // terminal_type - computed: true, optional: false, required: false
  public get terminalType() {
    return this.getStringAttribute('terminal_type');
  }

  // typescript_auto_create_path - computed: true, optional: false, required: false
  public get typescriptAutoCreatePath() {
    return this.getBooleanAttribute('typescript_auto_create_path');
  }

  // typescript_name - computed: true, optional: false, required: false
  public get typescriptName() {
    return this.getStringAttribute('typescript_name');
  }

  // typescript_path - computed: true, optional: false, required: false
  public get typescriptPath() {
    return this.getStringAttribute('typescript_path');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // username_regex - computed: true, optional: false, required: false
  public get usernameRegex() {
    return this.getStringAttribute('username_regex');
  }

  // wol_boot_wait_time - computed: true, optional: false, required: false
  public get wolBootWaitTime() {
    return this.getStringAttribute('wol_boot_wait_time');
  }

  // wol_broadcast_address - computed: true, optional: false, required: false
  public get wolBroadcastAddress() {
    return this.getStringAttribute('wol_broadcast_address');
  }

  // wol_mac_address - computed: true, optional: false, required: false
  public get wolMacAddress() {
    return this.getStringAttribute('wol_mac_address');
  }

  // wol_send_packet - computed: true, optional: false, required: false
  public get wolSendPacket() {
    return this.getBooleanAttribute('wol_send_packet');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/data-sources/connection_telnet guacamole_connection_telnet}
*/
export class DataGuacamoleConnectionTelnet extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "guacamole_connection_telnet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGuacamoleConnectionTelnet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGuacamoleConnectionTelnet to import
  * @param importFromId The id of the existing DataGuacamoleConnectionTelnet that should be imported. Refer to the {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/data-sources/connection_telnet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGuacamoleConnectionTelnet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "guacamole_connection_telnet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/data-sources/connection_telnet guacamole_connection_telnet} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGuacamoleConnectionTelnetConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataGuacamoleConnectionTelnetConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'guacamole_connection_telnet',
      terraformGeneratorMetadata: {
        providerName: 'guacamole',
        providerVersion: '1.4.1',
        providerVersionConstraint: '1.4.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._identifier = config.identifier;
    this._path = config.path;
    this._parameters.internalValue = config.parameters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_connections - computed: true, optional: false, required: false
  public get activeConnections() {
    return this.getNumberAttribute('active_connections');
  }

  // attributes - computed: true, optional: false, required: false
  private _attributes = new DataGuacamoleConnectionTelnetAttributesList(this, "attributes", false);
  public get attributes() {
    return this._attributes;
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

  // identifier - computed: false, optional: true, required: false
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  public resetIdentifier() {
    this._identifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent_identifier - computed: true, optional: false, required: false
  public get parentIdentifier() {
    return this.getStringAttribute('parent_identifier');
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new DataGuacamoleConnectionTelnetParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: DataGuacamoleConnectionTelnetParameters) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      path: cdktf.stringToTerraform(this._path),
      parameters: dataGuacamoleConnectionTelnetParametersToTerraform(this._parameters.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameters: {
        value: dataGuacamoleConnectionTelnetParametersToHclTerraform(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataGuacamoleConnectionTelnetParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
