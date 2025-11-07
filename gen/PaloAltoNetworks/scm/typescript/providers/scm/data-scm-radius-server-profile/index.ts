// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/radius_server_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataScmRadiusServerProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The UUID of the RADIUS server profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/radius_server_profile#id DataScmRadiusServerProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The name of the RADIUS server profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/radius_server_profile#name DataScmRadiusServerProfile#name}
  */
  readonly name?: string;
}
export interface DataScmRadiusServerProfileProtocolEAPTTLSWithPAP {
}

export function dataScmRadiusServerProfileProtocolEAPTTLSWithPAPToTerraform(struct?: DataScmRadiusServerProfileProtocolEAPTTLSWithPAP): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmRadiusServerProfileProtocolEAPTTLSWithPAPToHclTerraform(struct?: DataScmRadiusServerProfileProtocolEAPTTLSWithPAP): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmRadiusServerProfileProtocolEAPTTLSWithPAPOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmRadiusServerProfileProtocolEAPTTLSWithPAP | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmRadiusServerProfileProtocolEAPTTLSWithPAP | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // anon_outer_id - computed: true, optional: false, required: false
  public get anonOuterId() {
    return this.getBooleanAttribute('anon_outer_id');
  }

  // radius_cert_profile - computed: true, optional: false, required: false
  public get radiusCertProfile() {
    return this.getStringAttribute('radius_cert_profile');
  }
}
export interface DataScmRadiusServerProfileProtocolPEAPMSCHAPv2 {
}

export function dataScmRadiusServerProfileProtocolPEAPMSCHAPv2ToTerraform(struct?: DataScmRadiusServerProfileProtocolPEAPMSCHAPv2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmRadiusServerProfileProtocolPEAPMSCHAPv2ToHclTerraform(struct?: DataScmRadiusServerProfileProtocolPEAPMSCHAPv2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmRadiusServerProfileProtocolPEAPMSCHAPv2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmRadiusServerProfileProtocolPEAPMSCHAPv2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmRadiusServerProfileProtocolPEAPMSCHAPv2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_pwd_change - computed: true, optional: false, required: false
  public get allowPwdChange() {
    return this.getBooleanAttribute('allow_pwd_change');
  }

  // anon_outer_id - computed: true, optional: false, required: false
  public get anonOuterId() {
    return this.getBooleanAttribute('anon_outer_id');
  }

  // radius_cert_profile - computed: true, optional: false, required: false
  public get radiusCertProfile() {
    return this.getStringAttribute('radius_cert_profile');
  }
}
export interface DataScmRadiusServerProfileProtocolPEAPWithGTC {
}

export function dataScmRadiusServerProfileProtocolPEAPWithGTCToTerraform(struct?: DataScmRadiusServerProfileProtocolPEAPWithGTC): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmRadiusServerProfileProtocolPEAPWithGTCToHclTerraform(struct?: DataScmRadiusServerProfileProtocolPEAPWithGTC): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmRadiusServerProfileProtocolPEAPWithGTCOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmRadiusServerProfileProtocolPEAPWithGTC | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmRadiusServerProfileProtocolPEAPWithGTC | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // anon_outer_id - computed: true, optional: false, required: false
  public get anonOuterId() {
    return this.getBooleanAttribute('anon_outer_id');
  }

  // radius_cert_profile - computed: true, optional: false, required: false
  public get radiusCertProfile() {
    return this.getStringAttribute('radius_cert_profile');
  }
}
export interface DataScmRadiusServerProfileProtocol {
}

export function dataScmRadiusServerProfileProtocolToTerraform(struct?: DataScmRadiusServerProfileProtocol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmRadiusServerProfileProtocolToHclTerraform(struct?: DataScmRadiusServerProfileProtocol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmRadiusServerProfileProtocolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmRadiusServerProfileProtocol | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmRadiusServerProfileProtocol | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // c_h_a_p - computed: true, optional: false, required: false
  public get cHAP() {
    return this.getStringAttribute('c_h_a_p');
  }

  // e_a_p__t_t_l_s_with__p_a_p - computed: true, optional: false, required: false
  private _eAPTTLSWithPAP = new DataScmRadiusServerProfileProtocolEAPTTLSWithPAPOutputReference(this, "e_a_p__t_t_l_s_with__p_a_p");
  public get eAPTTLSWithPAP() {
    return this._eAPTTLSWithPAP;
  }

  // p_a_p - computed: true, optional: false, required: false
  public get pAP() {
    return this.getStringAttribute('p_a_p');
  }

  // p_e_a_p__m_s_c_h_a_pv2 - computed: true, optional: false, required: false
  private _pEAPMSCHAPv2 = new DataScmRadiusServerProfileProtocolPEAPMSCHAPv2OutputReference(this, "p_e_a_p__m_s_c_h_a_pv2");
  public get pEAPMSCHAPv2() {
    return this._pEAPMSCHAPv2;
  }

  // p_e_a_p_with__g_t_c - computed: true, optional: false, required: false
  private _pEAPWithGTC = new DataScmRadiusServerProfileProtocolPEAPWithGTCOutputReference(this, "p_e_a_p_with__g_t_c");
  public get pEAPWithGTC() {
    return this._pEAPWithGTC;
  }
}
export interface DataScmRadiusServerProfileServer {
}

export function dataScmRadiusServerProfileServerToTerraform(struct?: DataScmRadiusServerProfileServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmRadiusServerProfileServerToHclTerraform(struct?: DataScmRadiusServerProfileServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmRadiusServerProfileServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmRadiusServerProfileServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmRadiusServerProfileServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }
}

export class DataScmRadiusServerProfileServerList extends cdktf.ComplexList {

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
  public get(index: number): DataScmRadiusServerProfileServerOutputReference {
    return new DataScmRadiusServerProfileServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/radius_server_profile scm_radius_server_profile}
*/
export class DataScmRadiusServerProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_radius_server_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataScmRadiusServerProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataScmRadiusServerProfile to import
  * @param importFromId The id of the existing DataScmRadiusServerProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/radius_server_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataScmRadiusServerProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_radius_server_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/radius_server_profile scm_radius_server_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataScmRadiusServerProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataScmRadiusServerProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_radius_server_profile',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.3'
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device - computed: true, optional: false, required: false
  public get device() {
    return this.getStringAttribute('device');
  }

  // folder - computed: true, optional: false, required: false
  public get folder() {
    return this.getStringAttribute('folder');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: true, required: false
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

  // protocol - computed: true, optional: false, required: false
  private _protocol = new DataScmRadiusServerProfileProtocolOutputReference(this, "protocol");
  public get protocol() {
    return this._protocol;
  }

  // retries - computed: true, optional: false, required: false
  public get retries() {
    return this.getNumberAttribute('retries');
  }

  // server - computed: true, optional: false, required: false
  private _server = new DataScmRadiusServerProfileServerList(this, "server", false);
  public get server() {
    return this._server;
  }

  // snippet - computed: true, optional: false, required: false
  public get snippet() {
    return this.getStringAttribute('snippet');
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
