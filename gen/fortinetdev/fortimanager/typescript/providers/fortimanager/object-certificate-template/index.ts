// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_certificate_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectCertificateTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_certificate_template#adom ObjectCertificateTemplate#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_certificate_template#city ObjectCertificateTemplate#city}
  */
  readonly city?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_certificate_template#country ObjectCertificateTemplate#country}
  */
  readonly country?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_certificate_template#curve_name ObjectCertificateTemplate#curve_name}
  */
  readonly curveName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_certificate_template#digest_type ObjectCertificateTemplate#digest_type}
  */
  readonly digestType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_certificate_template#email ObjectCertificateTemplate#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_certificate_template#id ObjectCertificateTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_certificate_template#id_type ObjectCertificateTemplate#id_type}
  */
  readonly idType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_certificate_template#key_size ObjectCertificateTemplate#key_size}
  */
  readonly keySize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_certificate_template#key_type ObjectCertificateTemplate#key_type}
  */
  readonly keyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_certificate_template#name ObjectCertificateTemplate#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_certificate_template#organization ObjectCertificateTemplate#organization}
  */
  readonly organization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_certificate_template#organization_unit ObjectCertificateTemplate#organization_unit}
  */
  readonly organizationUnit?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_certificate_template#scep_ca_identifier ObjectCertificateTemplate#scep_ca_identifier}
  */
  readonly scepCaIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_certificate_template#scep_password ObjectCertificateTemplate#scep_password}
  */
  readonly scepPassword?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_certificate_template#scep_server ObjectCertificateTemplate#scep_server}
  */
  readonly scepServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_certificate_template#scopetype ObjectCertificateTemplate#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_certificate_template#state ObjectCertificateTemplate#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_certificate_template#subject_alt_name ObjectCertificateTemplate#subject_alt_name}
  */
  readonly subjectAltName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_certificate_template#subject_name ObjectCertificateTemplate#subject_name}
  */
  readonly subjectName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_certificate_template#type ObjectCertificateTemplate#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_certificate_template fortimanager_object_certificate_template}
*/
export class ObjectCertificateTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_certificate_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectCertificateTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectCertificateTemplate to import
  * @param importFromId The id of the existing ObjectCertificateTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_certificate_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectCertificateTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_certificate_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_certificate_template fortimanager_object_certificate_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectCertificateTemplateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectCertificateTemplateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_certificate_template',
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
    this._city = config.city;
    this._country = config.country;
    this._curveName = config.curveName;
    this._digestType = config.digestType;
    this._email = config.email;
    this._id = config.id;
    this._idType = config.idType;
    this._keySize = config.keySize;
    this._keyType = config.keyType;
    this._name = config.name;
    this._organization = config.organization;
    this._organizationUnit = config.organizationUnit;
    this._scepCaIdentifier = config.scepCaIdentifier;
    this._scepPassword = config.scepPassword;
    this._scepServer = config.scepServer;
    this._scopetype = config.scopetype;
    this._state = config.state;
    this._subjectAltName = config.subjectAltName;
    this._subjectName = config.subjectName;
    this._type = config.type;
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

  // city - computed: false, optional: true, required: false
  private _city?: string; 
  public get city() {
    return this.getStringAttribute('city');
  }
  public set city(value: string) {
    this._city = value;
  }
  public resetCity() {
    this._city = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cityInput() {
    return this._city;
  }

  // country - computed: false, optional: true, required: false
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // curve_name - computed: true, optional: true, required: false
  private _curveName?: string; 
  public get curveName() {
    return this.getStringAttribute('curve_name');
  }
  public set curveName(value: string) {
    this._curveName = value;
  }
  public resetCurveName() {
    this._curveName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get curveNameInput() {
    return this._curveName;
  }

  // digest_type - computed: true, optional: true, required: false
  private _digestType?: string; 
  public get digestType() {
    return this.getStringAttribute('digest_type');
  }
  public set digestType(value: string) {
    this._digestType = value;
  }
  public resetDigestType() {
    this._digestType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digestTypeInput() {
    return this._digestType;
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
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

  // id_type - computed: true, optional: true, required: false
  private _idType?: string; 
  public get idType() {
    return this.getStringAttribute('id_type');
  }
  public set idType(value: string) {
    this._idType = value;
  }
  public resetIdType() {
    this._idType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idTypeInput() {
    return this._idType;
  }

  // key_size - computed: true, optional: true, required: false
  private _keySize?: string; 
  public get keySize() {
    return this.getStringAttribute('key_size');
  }
  public set keySize(value: string) {
    this._keySize = value;
  }
  public resetKeySize() {
    this._keySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySizeInput() {
    return this._keySize;
  }

  // key_type - computed: true, optional: true, required: false
  private _keyType?: string; 
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
  public set keyType(value: string) {
    this._keyType = value;
  }
  public resetKeyType() {
    this._keyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeInput() {
    return this._keyType;
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

  // organization - computed: false, optional: true, required: false
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // organization_unit - computed: true, optional: true, required: false
  private _organizationUnit?: string[]; 
  public get organizationUnit() {
    return cdktf.Fn.tolist(this.getListAttribute('organization_unit'));
  }
  public set organizationUnit(value: string[]) {
    this._organizationUnit = value;
  }
  public resetOrganizationUnit() {
    this._organizationUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationUnitInput() {
    return this._organizationUnit;
  }

  // scep_ca_identifier - computed: false, optional: true, required: false
  private _scepCaIdentifier?: string; 
  public get scepCaIdentifier() {
    return this.getStringAttribute('scep_ca_identifier');
  }
  public set scepCaIdentifier(value: string) {
    this._scepCaIdentifier = value;
  }
  public resetScepCaIdentifier() {
    this._scepCaIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scepCaIdentifierInput() {
    return this._scepCaIdentifier;
  }

  // scep_password - computed: true, optional: true, required: false
  private _scepPassword?: string[]; 
  public get scepPassword() {
    return cdktf.Fn.tolist(this.getListAttribute('scep_password'));
  }
  public set scepPassword(value: string[]) {
    this._scepPassword = value;
  }
  public resetScepPassword() {
    this._scepPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scepPasswordInput() {
    return this._scepPassword;
  }

  // scep_server - computed: false, optional: true, required: false
  private _scepServer?: string; 
  public get scepServer() {
    return this.getStringAttribute('scep_server');
  }
  public set scepServer(value: string) {
    this._scepServer = value;
  }
  public resetScepServer() {
    this._scepServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scepServerInput() {
    return this._scepServer;
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

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // subject_alt_name - computed: false, optional: true, required: false
  private _subjectAltName?: string; 
  public get subjectAltName() {
    return this.getStringAttribute('subject_alt_name');
  }
  public set subjectAltName(value: string) {
    this._subjectAltName = value;
  }
  public resetSubjectAltName() {
    this._subjectAltName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAltNameInput() {
    return this._subjectAltName;
  }

  // subject_name - computed: false, optional: true, required: false
  private _subjectName?: string; 
  public get subjectName() {
    return this.getStringAttribute('subject_name');
  }
  public set subjectName(value: string) {
    this._subjectName = value;
  }
  public resetSubjectName() {
    this._subjectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectNameInput() {
    return this._subjectName;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      city: cdktf.stringToTerraform(this._city),
      country: cdktf.stringToTerraform(this._country),
      curve_name: cdktf.stringToTerraform(this._curveName),
      digest_type: cdktf.stringToTerraform(this._digestType),
      email: cdktf.stringToTerraform(this._email),
      id: cdktf.stringToTerraform(this._id),
      id_type: cdktf.stringToTerraform(this._idType),
      key_size: cdktf.stringToTerraform(this._keySize),
      key_type: cdktf.stringToTerraform(this._keyType),
      name: cdktf.stringToTerraform(this._name),
      organization: cdktf.stringToTerraform(this._organization),
      organization_unit: cdktf.listMapper(cdktf.stringToTerraform, false)(this._organizationUnit),
      scep_ca_identifier: cdktf.stringToTerraform(this._scepCaIdentifier),
      scep_password: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scepPassword),
      scep_server: cdktf.stringToTerraform(this._scepServer),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      state: cdktf.stringToTerraform(this._state),
      subject_alt_name: cdktf.stringToTerraform(this._subjectAltName),
      subject_name: cdktf.stringToTerraform(this._subjectName),
      type: cdktf.stringToTerraform(this._type),
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
      city: {
        value: cdktf.stringToHclTerraform(this._city),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      country: {
        value: cdktf.stringToHclTerraform(this._country),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      curve_name: {
        value: cdktf.stringToHclTerraform(this._curveName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      digest_type: {
        value: cdktf.stringToHclTerraform(this._digestType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
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
      id_type: {
        value: cdktf.stringToHclTerraform(this._idType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_size: {
        value: cdktf.stringToHclTerraform(this._keySize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_type: {
        value: cdktf.stringToHclTerraform(this._keyType),
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
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_unit: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._organizationUnit),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      scep_ca_identifier: {
        value: cdktf.stringToHclTerraform(this._scepCaIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scep_password: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scepPassword),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      scep_server: {
        value: cdktf.stringToHclTerraform(this._scepServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subject_alt_name: {
        value: cdktf.stringToHclTerraform(this._subjectAltName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subject_name: {
        value: cdktf.stringToHclTerraform(this._subjectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
