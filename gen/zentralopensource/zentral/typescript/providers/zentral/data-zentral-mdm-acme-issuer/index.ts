// https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/data-sources/mdm_acme_issuer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZentralMdmAcmeIssuerConfig extends cdktf.TerraformMetaArguments {
  /**
  * `ID` of the MDM ACME issuer (UUID).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/data-sources/mdm_acme_issuer#id DataZentralMdmAcmeIssuer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the ACME issuer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/data-sources/mdm_acme_issuer#name DataZentralMdmAcmeIssuer#name}
  */
  readonly name?: string;
}
export interface DataZentralMdmAcmeIssuerIdent {
}

export function dataZentralMdmAcmeIssuerIdentToTerraform(struct?: DataZentralMdmAcmeIssuerIdent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZentralMdmAcmeIssuerIdentToHclTerraform(struct?: DataZentralMdmAcmeIssuerIdent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZentralMdmAcmeIssuerIdentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataZentralMdmAcmeIssuerIdent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZentralMdmAcmeIssuerIdent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bearer_token - computed: true, optional: false, required: false
  public get bearerToken() {
    return this.getStringAttribute('bearer_token');
  }

  // max_retries - computed: true, optional: false, required: false
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }

  // request_timeout - computed: true, optional: false, required: false
  public get requestTimeout() {
    return this.getNumberAttribute('request_timeout');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}
export interface DataZentralMdmAcmeIssuerMicrosoftCa {
}

export function dataZentralMdmAcmeIssuerMicrosoftCaToTerraform(struct?: DataZentralMdmAcmeIssuerMicrosoftCa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZentralMdmAcmeIssuerMicrosoftCaToHclTerraform(struct?: DataZentralMdmAcmeIssuerMicrosoftCa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZentralMdmAcmeIssuerMicrosoftCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataZentralMdmAcmeIssuerMicrosoftCa | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZentralMdmAcmeIssuerMicrosoftCa | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DataZentralMdmAcmeIssuerOktaCa {
}

export function dataZentralMdmAcmeIssuerOktaCaToTerraform(struct?: DataZentralMdmAcmeIssuerOktaCa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZentralMdmAcmeIssuerOktaCaToHclTerraform(struct?: DataZentralMdmAcmeIssuerOktaCa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZentralMdmAcmeIssuerOktaCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataZentralMdmAcmeIssuerOktaCa | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZentralMdmAcmeIssuerOktaCa | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DataZentralMdmAcmeIssuerStaticChallenge {
}

export function dataZentralMdmAcmeIssuerStaticChallengeToTerraform(struct?: DataZentralMdmAcmeIssuerStaticChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZentralMdmAcmeIssuerStaticChallengeToHclTerraform(struct?: DataZentralMdmAcmeIssuerStaticChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZentralMdmAcmeIssuerStaticChallengeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataZentralMdmAcmeIssuerStaticChallenge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZentralMdmAcmeIssuerStaticChallenge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // challenge - computed: true, optional: false, required: false
  public get challenge() {
    return this.getStringAttribute('challenge');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/data-sources/mdm_acme_issuer zentral_mdm_acme_issuer}
*/
export class DataZentralMdmAcmeIssuer extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zentral_mdm_acme_issuer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZentralMdmAcmeIssuer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZentralMdmAcmeIssuer to import
  * @param importFromId The id of the existing DataZentralMdmAcmeIssuer that should be imported. Refer to the {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/data-sources/mdm_acme_issuer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZentralMdmAcmeIssuer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zentral_mdm_acme_issuer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/data-sources/mdm_acme_issuer zentral_mdm_acme_issuer} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZentralMdmAcmeIssuerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZentralMdmAcmeIssuerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zentral_mdm_acme_issuer',
      terraformGeneratorMetadata: {
        providerName: 'zentral',
        providerVersion: '0.1.65',
        providerVersionConstraint: '0.1.65'
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

  // attest - computed: true, optional: false, required: false
  public get attest() {
    return this.getBooleanAttribute('attest');
  }

  // backend - computed: true, optional: false, required: false
  public get backend() {
    return this.getStringAttribute('backend');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // directory_url - computed: true, optional: false, required: false
  public get directoryUrl() {
    return this.getStringAttribute('directory_url');
  }

  // extended_key_usage - computed: true, optional: false, required: false
  public get extendedKeyUsage() {
    return cdktf.Fn.tolist(this.getListAttribute('extended_key_usage'));
  }

  // hardware_bound - computed: true, optional: false, required: false
  public get hardwareBound() {
    return this.getBooleanAttribute('hardware_bound');
  }

  // id - computed: false, optional: true, required: false
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

  // ident - computed: true, optional: false, required: false
  private _ident = new DataZentralMdmAcmeIssuerIdentOutputReference(this, "ident");
  public get ident() {
    return this._ident;
  }

  // key_size - computed: true, optional: false, required: false
  public get keySize() {
    return this.getNumberAttribute('key_size');
  }

  // key_type - computed: true, optional: false, required: false
  public get keyType() {
    return this.getStringAttribute('key_type');
  }

  // microsoft_ca - computed: true, optional: false, required: false
  private _microsoftCa = new DataZentralMdmAcmeIssuerMicrosoftCaOutputReference(this, "microsoft_ca");
  public get microsoftCa() {
    return this._microsoftCa;
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

  // okta_ca - computed: true, optional: false, required: false
  private _oktaCa = new DataZentralMdmAcmeIssuerOktaCaOutputReference(this, "okta_ca");
  public get oktaCa() {
    return this._oktaCa;
  }

  // static_challenge - computed: true, optional: false, required: false
  private _staticChallenge = new DataZentralMdmAcmeIssuerStaticChallengeOutputReference(this, "static_challenge");
  public get staticChallenge() {
    return this._staticChallenge;
  }

  // usage_flags - computed: true, optional: false, required: false
  public get usageFlags() {
    return this.getNumberAttribute('usage_flags');
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
