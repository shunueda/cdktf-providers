// https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/cloud_credential
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudCredentialConfig extends cdktf.TerraformMetaArguments {
  /**
  * AWS accesskey.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/cloud_credential#accesskey CloudCredential#accesskey}
  */
  readonly accesskey?: string;
  /**
  * AWS cloud provider credential type. Accepted values are 'rolearn', 'accesskey'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/cloud_credential#awscredtype CloudCredential#awscredtype}
  */
  readonly awscredtype?: string;
  /**
  * Azure client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/cloud_credential#clientid CloudCredential#clientid}
  */
  readonly clientid?: string;
  /**
  * Azure client secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/cloud_credential#clientsecret CloudCredential#clientsecret}
  */
  readonly clientsecret?: string;
  /**
  * Credential file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/cloud_credential#credfile CloudCredential#credfile}
  */
  readonly credfile?: string;
  /**
  * Description of the project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/cloud_credential#description CloudCredential#description}
  */
  readonly description?: string;
  /**
  * External ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/cloud_credential#externalid CloudCredential#externalid}
  */
  readonly externalid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/cloud_credential#id CloudCredential#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of cloud crredential
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/cloud_credential#name CloudCredential#name}
  */
  readonly name: string;
  /**
  * Name of the project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/cloud_credential#project CloudCredential#project}
  */
  readonly project: string;
  /**
  * Type of the cloud provider. Accepted values are 'AWS', 'AZURE', 'GCP', 'MINIO'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/cloud_credential#providertype CloudCredential#providertype}
  */
  readonly providertype: string;
  /**
  * AWS role ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/cloud_credential#rolearn CloudCredential#rolearn}
  */
  readonly rolearn?: string;
  /**
  * AWS secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/cloud_credential#secretkey CloudCredential#secretkey}
  */
  readonly secretkey?: string;
  /**
  * Azure subscription ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/cloud_credential#subscriptionid CloudCredential#subscriptionid}
  */
  readonly subscriptionid?: string;
  /**
  * Azure tenant ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/cloud_credential#tenantid CloudCredential#tenantid}
  */
  readonly tenantid?: string;
  /**
  * Cloud credential type. Accepted values are 'cluster-provisioning', 'data-backup' 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/cloud_credential#type CloudCredential#type}
  */
  readonly type: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/cloud_credential#timeouts CloudCredential#timeouts}
  */
  readonly timeouts?: CloudCredentialTimeouts;
}
export interface CloudCredentialTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/cloud_credential#create CloudCredential#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/cloud_credential#delete CloudCredential#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/cloud_credential#update CloudCredential#update}
  */
  readonly update?: string;
}

export function cloudCredentialTimeoutsToTerraform(struct?: CloudCredentialTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function cloudCredentialTimeoutsToHclTerraform(struct?: CloudCredentialTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudCredentialTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudCredentialTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudCredentialTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/cloud_credential rafay_cloud_credential}
*/
export class CloudCredential extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rafay_cloud_credential";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudCredential resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudCredential to import
  * @param importFromId The id of the existing CloudCredential that should be imported. Refer to the {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/cloud_credential#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudCredential to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rafay_cloud_credential", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/cloud_credential rafay_cloud_credential} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudCredentialConfig
  */
  public constructor(scope: Construct, id: string, config: CloudCredentialConfig) {
    super(scope, id, {
      terraformResourceType: 'rafay_cloud_credential',
      terraformGeneratorMetadata: {
        providerName: 'rafay',
        providerVersion: '1.1.52'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accesskey = config.accesskey;
    this._awscredtype = config.awscredtype;
    this._clientid = config.clientid;
    this._clientsecret = config.clientsecret;
    this._credfile = config.credfile;
    this._description = config.description;
    this._externalid = config.externalid;
    this._id = config.id;
    this._name = config.name;
    this._project = config.project;
    this._providertype = config.providertype;
    this._rolearn = config.rolearn;
    this._secretkey = config.secretkey;
    this._subscriptionid = config.subscriptionid;
    this._tenantid = config.tenantid;
    this._type = config.type;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accesskey - computed: false, optional: true, required: false
  private _accesskey?: string; 
  public get accesskey() {
    return this.getStringAttribute('accesskey');
  }
  public set accesskey(value: string) {
    this._accesskey = value;
  }
  public resetAccesskey() {
    this._accesskey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accesskeyInput() {
    return this._accesskey;
  }

  // awscredtype - computed: false, optional: true, required: false
  private _awscredtype?: string; 
  public get awscredtype() {
    return this.getStringAttribute('awscredtype');
  }
  public set awscredtype(value: string) {
    this._awscredtype = value;
  }
  public resetAwscredtype() {
    this._awscredtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awscredtypeInput() {
    return this._awscredtype;
  }

  // clientid - computed: false, optional: true, required: false
  private _clientid?: string; 
  public get clientid() {
    return this.getStringAttribute('clientid');
  }
  public set clientid(value: string) {
    this._clientid = value;
  }
  public resetClientid() {
    this._clientid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientidInput() {
    return this._clientid;
  }

  // clientsecret - computed: false, optional: true, required: false
  private _clientsecret?: string; 
  public get clientsecret() {
    return this.getStringAttribute('clientsecret');
  }
  public set clientsecret(value: string) {
    this._clientsecret = value;
  }
  public resetClientsecret() {
    this._clientsecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientsecretInput() {
    return this._clientsecret;
  }

  // credfile - computed: false, optional: true, required: false
  private _credfile?: string; 
  public get credfile() {
    return this.getStringAttribute('credfile');
  }
  public set credfile(value: string) {
    this._credfile = value;
  }
  public resetCredfile() {
    this._credfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credfileInput() {
    return this._credfile;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // externalid - computed: false, optional: true, required: false
  private _externalid?: string; 
  public get externalid() {
    return this.getStringAttribute('externalid');
  }
  public set externalid(value: string) {
    this._externalid = value;
  }
  public resetExternalid() {
    this._externalid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalidInput() {
    return this._externalid;
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

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // providertype - computed: false, optional: false, required: true
  private _providertype?: string; 
  public get providertype() {
    return this.getStringAttribute('providertype');
  }
  public set providertype(value: string) {
    this._providertype = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providertypeInput() {
    return this._providertype;
  }

  // rolearn - computed: false, optional: true, required: false
  private _rolearn?: string; 
  public get rolearn() {
    return this.getStringAttribute('rolearn');
  }
  public set rolearn(value: string) {
    this._rolearn = value;
  }
  public resetRolearn() {
    this._rolearn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolearnInput() {
    return this._rolearn;
  }

  // secretkey - computed: false, optional: true, required: false
  private _secretkey?: string; 
  public get secretkey() {
    return this.getStringAttribute('secretkey');
  }
  public set secretkey(value: string) {
    this._secretkey = value;
  }
  public resetSecretkey() {
    this._secretkey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretkeyInput() {
    return this._secretkey;
  }

  // subscriptionid - computed: false, optional: true, required: false
  private _subscriptionid?: string; 
  public get subscriptionid() {
    return this.getStringAttribute('subscriptionid');
  }
  public set subscriptionid(value: string) {
    this._subscriptionid = value;
  }
  public resetSubscriptionid() {
    this._subscriptionid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionidInput() {
    return this._subscriptionid;
  }

  // tenantid - computed: false, optional: true, required: false
  private _tenantid?: string; 
  public get tenantid() {
    return this.getStringAttribute('tenantid');
  }
  public set tenantid(value: string) {
    this._tenantid = value;
  }
  public resetTenantid() {
    this._tenantid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantidInput() {
    return this._tenantid;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudCredentialTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudCredentialTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accesskey: cdktf.stringToTerraform(this._accesskey),
      awscredtype: cdktf.stringToTerraform(this._awscredtype),
      clientid: cdktf.stringToTerraform(this._clientid),
      clientsecret: cdktf.stringToTerraform(this._clientsecret),
      credfile: cdktf.stringToTerraform(this._credfile),
      description: cdktf.stringToTerraform(this._description),
      externalid: cdktf.stringToTerraform(this._externalid),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      providertype: cdktf.stringToTerraform(this._providertype),
      rolearn: cdktf.stringToTerraform(this._rolearn),
      secretkey: cdktf.stringToTerraform(this._secretkey),
      subscriptionid: cdktf.stringToTerraform(this._subscriptionid),
      tenantid: cdktf.stringToTerraform(this._tenantid),
      type: cdktf.stringToTerraform(this._type),
      timeouts: cloudCredentialTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accesskey: {
        value: cdktf.stringToHclTerraform(this._accesskey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      awscredtype: {
        value: cdktf.stringToHclTerraform(this._awscredtype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clientid: {
        value: cdktf.stringToHclTerraform(this._clientid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clientsecret: {
        value: cdktf.stringToHclTerraform(this._clientsecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credfile: {
        value: cdktf.stringToHclTerraform(this._credfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      externalid: {
        value: cdktf.stringToHclTerraform(this._externalid),
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
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      providertype: {
        value: cdktf.stringToHclTerraform(this._providertype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rolearn: {
        value: cdktf.stringToHclTerraform(this._rolearn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secretkey: {
        value: cdktf.stringToHclTerraform(this._secretkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscriptionid: {
        value: cdktf.stringToHclTerraform(this._subscriptionid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenantid: {
        value: cdktf.stringToHclTerraform(this._tenantid),
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
      timeouts: {
        value: cloudCredentialTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudCredentialTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
