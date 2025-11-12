// https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/service_broker
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceBrokerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/service_broker#annotations ServiceBroker#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Special marker to know and trigger a service broker update, this should not be set to true on your resource declaration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/service_broker#catalog_change ServiceBroker#catalog_change}
  */
  readonly catalogChange?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/service_broker#catalog_hash ServiceBroker#catalog_hash}
  */
  readonly catalogHash?: string;
  /**
  * Set to true if you want to see errors when getting service broker catalog
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/service_broker#fail_when_catalog_not_accessible ServiceBroker#fail_when_catalog_not_accessible}
  */
  readonly failWhenCatalogNotAccessible?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/service_broker#id ServiceBroker#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/service_broker#labels ServiceBroker#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/service_broker#name ServiceBroker#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/service_broker#password ServiceBroker#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/service_broker#space ServiceBroker#space}
  */
  readonly space?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/service_broker#url ServiceBroker#url}
  */
  readonly url: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/service_broker#username ServiceBroker#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/service_broker cloudfoundry_service_broker}
*/
export class ServiceBroker extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudfoundry_service_broker";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceBroker resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceBroker to import
  * @param importFromId The id of the existing ServiceBroker that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/service_broker#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceBroker to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudfoundry_service_broker", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/service_broker cloudfoundry_service_broker} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceBrokerConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceBrokerConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudfoundry_service_broker',
      terraformGeneratorMetadata: {
        providerName: 'cloudfoundry',
        providerVersion: '0.53.1',
        providerVersionConstraint: '0.53.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._catalogChange = config.catalogChange;
    this._catalogHash = config.catalogHash;
    this._failWhenCatalogNotAccessible = config.failWhenCatalogNotAccessible;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._password = config.password;
    this._space = config.space;
    this._url = config.url;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // catalog_change - computed: false, optional: true, required: false
  private _catalogChange?: boolean | cdktf.IResolvable; 
  public get catalogChange() {
    return this.getBooleanAttribute('catalog_change');
  }
  public set catalogChange(value: boolean | cdktf.IResolvable) {
    this._catalogChange = value;
  }
  public resetCatalogChange() {
    this._catalogChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogChangeInput() {
    return this._catalogChange;
  }

  // catalog_hash - computed: true, optional: true, required: false
  private _catalogHash?: string; 
  public get catalogHash() {
    return this.getStringAttribute('catalog_hash');
  }
  public set catalogHash(value: string) {
    this._catalogHash = value;
  }
  public resetCatalogHash() {
    this._catalogHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogHashInput() {
    return this._catalogHash;
  }

  // fail_when_catalog_not_accessible - computed: false, optional: true, required: false
  private _failWhenCatalogNotAccessible?: boolean | cdktf.IResolvable; 
  public get failWhenCatalogNotAccessible() {
    return this.getBooleanAttribute('fail_when_catalog_not_accessible');
  }
  public set failWhenCatalogNotAccessible(value: boolean | cdktf.IResolvable) {
    this._failWhenCatalogNotAccessible = value;
  }
  public resetFailWhenCatalogNotAccessible() {
    this._failWhenCatalogNotAccessible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failWhenCatalogNotAccessibleInput() {
    return this._failWhenCatalogNotAccessible;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // service_plans - computed: true, optional: false, required: false
  private _servicePlans = new cdktf.StringMap(this, "service_plans");
  public get servicePlans() {
    return this._servicePlans;
  }

  // services - computed: true, optional: false, required: false
  private _services = new cdktf.StringMap(this, "services");
  public get services() {
    return this._services;
  }

  // space - computed: false, optional: true, required: false
  private _space?: string; 
  public get space() {
    return this.getStringAttribute('space');
  }
  public set space(value: string) {
    this._space = value;
  }
  public resetSpace() {
    this._space = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceInput() {
    return this._space;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      catalog_change: cdktf.booleanToTerraform(this._catalogChange),
      catalog_hash: cdktf.stringToTerraform(this._catalogHash),
      fail_when_catalog_not_accessible: cdktf.booleanToTerraform(this._failWhenCatalogNotAccessible),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      space: cdktf.stringToTerraform(this._space),
      url: cdktf.stringToTerraform(this._url),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      catalog_change: {
        value: cdktf.booleanToHclTerraform(this._catalogChange),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      catalog_hash: {
        value: cdktf.stringToHclTerraform(this._catalogHash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fail_when_catalog_not_accessible: {
        value: cdktf.booleanToHclTerraform(this._failWhenCatalogNotAccessible),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      space: {
        value: cdktf.stringToHclTerraform(this._space),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
